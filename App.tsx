
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { okrsData, teams } from './data';
import { Okr, TeamId, Initiative } from './types';
import TargetIcon from './components/icons/TargetIcon';
import CheckIcon from './components/icons/CheckIcon';
import KeyIcon from './components/icons/KeyIcon';
import BulbIcon from './components/icons/BulbIcon';
import Flag from './components/Flag';
import UsersIcon from './components/icons/UsersIcon';
import LinkIcon from './components/icons/LinkIcon';
import SearchIcon from './components/icons/SearchIcon';

const highlight = (text: string, query: string) => {
    if (!query.trim()) {
        return <>{text}</>;
    }
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    return (
        <>
            {parts.map((part, i) =>
                part.toLowerCase() === query.toLowerCase() ? (
                    <mark key={i} className="bg-yellow-200 text-black rounded px-0.5 py-0">{part}</mark>
                ) : (
                    <React.Fragment key={i}>{part}</React.Fragment>
                )
            )}
        </>
    );
};


const TeamFilter: React.FC<{
    selectedTeamId: TeamId;
    onSelectTeam: (teamId: TeamId) => void;
}> = ({ selectedTeamId, onSelectTeam }) => (
    <div className="flex flex-wrap items-center gap-2 mb-6">
        {teams.map(team => (
            <button
                key={team.id}
                onClick={() => onSelectTeam(team.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                    selectedTeamId === team.id 
                        ? 'bg-[#0054eb] text-white shadow' 
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
            >
                {team.name}
            </button>
        ))}
    </div>
);


const OkrPill: React.FC<{ okr: Okr; isSelected: boolean; onSelect: () => void; searchQuery: string; }> = ({ okr, isSelected, onSelect, searchQuery }) => {
  const selectedClasses = isSelected ? 'bg-white shadow-md' : 'bg-transparent hover:bg-white/70 hover:shadow-sm';
  return (
    <button
      onClick={onSelect}
      className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-start space-x-4 ${selectedClasses}`}
    >
      <div className="text-3xl pt-1">{okr.emoji}</div>
      <div>
        <p className="font-bold text-[#002059]">{highlight(okr.title, searchQuery)}</p>
        <p className="text-sm text-[#434343]">{highlight(okr.subtitle, searchQuery)}</p>
      </div>
    </button>
  );
};


const Section: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="mb-8">
        <div className="flex items-center mb-4">
            <div className="text-[#022a9b]">{icon}</div>
            <h3 className="text-xl font-bold text-[#002059] ml-3">{title}</h3>
        </div>
        <div className="pl-10">
            {children}
        </div>
    </div>
);

const InitiativeList: React.FC<{ initiatives: Initiative[]; teamId: TeamId; level?: number; searchQuery: string; }> = ({ initiatives = [], teamId, level = 0, searchQuery }) => {
    const isBold = level === 0 && teamId === 'da';
    return (
      <ul className={`space-y-3 ${level > 0 ? 'mt-3 pl-6 border-l border-gray-200' : ''}`}>
        {initiatives.map((initiative, index) => (
          <li key={index}>
            <p className={`text-gray-800 ${teamId === 'da' && isBold ? 'font-semibold' : ''}`}>{highlight(initiative.text, searchQuery)}</p>
            {initiative.children && initiative.children.length > 0 && (
              <InitiativeList initiatives={initiative.children} teamId={teamId} level={level + 1} searchQuery={searchQuery} />
            )}
          </li>
        ))}
      </ul>
    );
};

const OkrDetailView: React.FC<{ 
    okr: Okr; 
    selectedKrCode: string | null;
    onSelectTeamAndOkr: (teamId: TeamId, okrId: string, krCode?: string) => void; 
    searchQuery: string;
}> = ({ okr, selectedKrCode, onSelectTeamAndOkr, searchQuery }) => {
    const parentOkr = useMemo(() => {
        if (!okr.parentOkrId) return null;
        return okrsData.find(o => o.id === okr.parentOkrId);
    }, [okr.parentOkrId]);
    
    const krRefs = useRef<Record<string, HTMLDivElement | null>>({});

    useEffect(() => {
        if (selectedKrCode && krRefs.current[selectedKrCode]) {
            setTimeout(() => {
                krRefs.current[selectedKrCode]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }, 100);
        }
    }, [selectedKrCode, okr.id]);


    const parseAndLinkKrCode = (description: string) => {
        const regex = /\[([^\]]+)\]/g;
        const parts: (string | JSX.Element)[] = [];
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(description)) !== null) {
            if (match.index > lastIndex) {
                parts.push(highlight(description.substring(lastIndex, match.index), searchQuery));
            }

            const content = match[1];
            const codes = content.split('/');

            const linkedCodes = codes.map((code, index) => {
                const codeMatch = code.match(/^([A-Z]{2})(\d+)\.(\d+)$/);
                if (!codeMatch) {
                    return <span key={code + index}>{code}</span>;
                }
                
                const teamCode = codeMatch[1];
                const okrNum = codeMatch[2];
                const krNum = codeMatch[3];
                const teamId = teamCode.toLowerCase() as TeamId;
                const okrId = `${teamId}-${okrNum}`;
                const krCode = `${teamCode}${okrNum}.${krNum}`;

                return (
                    <React.Fragment key={code}>
                        {index > 0 && <span className="text-gray-400">/</span>}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                onSelectTeamAndOkr(teamId, okrId, krCode);
                            }}
                            className="font-mono bg-blue-100 text-[#0054eb] rounded px-1 py-0.5 hover:bg-blue-200 transition-colors"
                        >
                            {code}
                        </a>
                    </React.Fragment>
                );
            });

            parts.push(<span key={match.index}>[{linkedCodes}]</span>);
            lastIndex = regex.lastIndex;
        }

        if (lastIndex < description.length) {
            parts.push(highlight(description.substring(lastIndex), searchQuery));
        }
        
        return parts.length > 0 ? <>{parts}</> : highlight(description, searchQuery);
    }


    return (
        <div className="p-8 md:p-12 h-full overflow-y-auto bg-white rounded-r-2xl">
            {okr.tag && (
                <div className="flex items-center mb-2">
                    <span style={{ backgroundColor: okr.tagColor }} className="text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{okr.tag}</span>
                </div>
            )}
            <h2 className="text-3xl font-extrabold text-[#002059] mb-6">{highlight(okr.subtitle, searchQuery)}</h2>

            {parentOkr && (
                 <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center mb-2">
                        <LinkIcon className="w-5 h-5 text-yellow-600"/>
                        <h4 className="text-md font-bold text-yellow-800 ml-2">Contribuye al OKR General</h4>
                    </div>
                    <p className="text-sm text-yellow-700 mb-3">Este objetivo apoya directamente a una de las iniciativas estratégicas de Data &amp; AI.</p>
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            onSelectTeamAndOkr('all', parentOkr.id);
                        }}
                        className="font-semibold text-[#0054eb] hover:underline text-sm flex items-center"
                    >
                       <span className="mr-1">{parentOkr.emoji}</span> {parentOkr.title} &rarr;
                    </button>
                </div>
            )}

            <Section title="Objetivo" icon={<TargetIcon className="w-6 h-6"/>}>
                <p className="text-gray-600 leading-relaxed">{highlight(okr.objective, searchQuery)}</p>
            </Section>

            {okr.companyObjectives && (
                <Section title="Alineación con los objetivos de la compañía" icon={<CheckIcon className="w-6 h-6"/>}>
                    <ul className="space-y-3">
                        {okr.companyObjectives.map((obj, index) => (
                            <li key={index} className="flex items-center text-gray-700">
                               <Flag countryCode={obj.countryCode} />
                               <span>{highlight(obj.text, searchQuery)}</span>
                            </li>
                        ))}
                    </ul>
                </Section>
            )}

            <Section title="Key Results" icon={<KeyIcon className="w-6 h-6"/>}>
                 <div className="space-y-5">
                    {okr.keyResults.map((kr, index) => {
                        const krNumFromTitle = kr.title.match(/^KR(\d+)/)?.[1];
                        let krCode: string | null = null;
                        if (krNumFromTitle && okr.teamId !== 'all') {
                           const okrNum = okr.id.split('-')[1];
                           krCode = `${okr.teamId.toUpperCase()}${okrNum}.${krNumFromTitle}`;
                        }
                        
                        const isHighlighted = selectedKrCode && krCode === selectedKrCode;

                        return (
                            <div 
                                key={index}
                                ref={el => { if(krCode) krRefs.current[krCode] = el}}
                                className={`p-4 rounded-lg border transition-all duration-300 ${isHighlighted ? 'bg-yellow-100 border-yellow-300 shadow-md' : 'bg-blue-50/50 border-blue-100'}`}
                            >
                                <h4 className="font-bold text-[#022a9b]">{highlight(kr.title, searchQuery)}</h4>
                                <p className="text-gray-600 mt-1">{parseAndLinkKrCode(kr.description)}</p>
                            </div>
                        );
                    })}
                </div>
            </Section>
            
            {okr.initiatives && okr.initiatives.length > 0 && (
                 <Section title="Iniciativas" icon={<BulbIcon className="w-6 h-6"/>}>
                    <InitiativeList initiatives={okr.initiatives} teamId={okr.teamId} searchQuery={searchQuery} />
                </Section>
            )}

        </div>
    );
};


const App: React.FC = () => {
  const [selectedTeamId, setSelectedTeamId] = useState<TeamId>('all');
  const [selectedOkrId, setSelectedOkrId] = useState<string | null>(null);
  const [selectedKrCode, setSelectedKrCode] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const currentOkrs = useMemo(() => {
    const teamOkrs = okrsData.filter(okr => okr.teamId === selectedTeamId);
    
    if (!searchQuery.trim()) {
      return teamOkrs;
    }
    
    const lowerCaseQuery = searchQuery.toLowerCase();

    const recursiveSearch = (initiatives: Initiative[]): boolean => {
      for (const initiative of initiatives) {
        if (initiative.text.toLowerCase().includes(lowerCaseQuery)) return true;
        if (initiative.children && recursiveSearch(initiative.children)) return true;
      }
      return false;
    };

    return teamOkrs.filter(okr => {
      const matchesTitle = okr.title.toLowerCase().includes(lowerCaseQuery);
      const matchesSubtitle = okr.subtitle.toLowerCase().includes(lowerCaseQuery);
      const matchesObjective = okr.objective.toLowerCase().includes(lowerCaseQuery);
      const matchesKrs = okr.keyResults.some(kr =>
        kr.title.toLowerCase().includes(lowerCaseQuery) ||
        kr.description.toLowerCase().includes(lowerCaseQuery)
      );
      const matchesInitiatives = okr.initiatives ? recursiveSearch(okr.initiatives) : false;
      const matchesCompanyObjectives = okr.companyObjectives?.some(co => co.text.toLowerCase().includes(lowerCaseQuery)) || false;

      return matchesTitle || matchesSubtitle || matchesObjective || matchesKrs || matchesInitiatives || matchesCompanyObjectives;
    });
  }, [selectedTeamId, searchQuery]);

  useEffect(() => {
    if (currentOkrs.length > 0) {
        if (!currentOkrs.some(okr => okr.id === selectedOkrId)) {
            setSelectedOkrId(currentOkrs[0].id);
        }
    } else {
        setSelectedOkrId(null);
    }
  }, [currentOkrs, selectedOkrId]);


  const selectedOkr = useMemo(() => {
    if (!selectedOkrId) return null;
    return okrsData.find(okr => okr.id === selectedOkrId) || null;
  }, [selectedOkrId]);

  const handleSelectTeam = (teamId: TeamId) => {
    setSelectedTeamId(teamId);
    setSelectedKrCode(null);
  };
  
  const handleSelectOkr = (okrId: string) => {
    setSelectedOkrId(okrId);
    setSelectedKrCode(null);
  }

  const handleSelectTeamAndOkr = (teamId: TeamId, okrId: string, krCode?: string) => {
    setSelectedTeamId(teamId);
    setSelectedOkrId(okrId);
    if(krCode) {
        setSelectedKrCode(krCode);
    } else {
        setSelectedKrCode(null);
    }
  }

  const selectedTeam = teams.find(t => t.id === selectedTeamId);

  return (
    <div className="min-h-screen text-[#434343] flex flex-col">
       <header className="p-6">
            <h1 className="text-4xl font-extrabold text-[#002059]">OKRs Data & AI 2025</h1>
            <p className="mt-2 text-lg text-gray-600 max-w-4xl">
                Desde Data impulsamos la estrategia de negocio combinando entrega de valor en el corto plazo, construcción de capacidades internas escalables, y exploración de tecnologías que nos posicionan para el futuro. Nuestros OKRs reflejan ese equilibrio, y están directamente alineados a los objetivos de la compañía.
            </p>
       </header>

      <main className="flex-grow flex flex-col p-6 pt-2">
            <div className="w-full max-w-7xl mx-auto mb-6">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <SearchIcon className="w-5 h-5 text-gray-400" />
                    </span>
                    <input
                        type="text"
                        placeholder="Buscar en títulos, objetivos, KRs o iniciativas..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 pl-10 text-base text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0054eb]"
                    />
                </div>
            </div>

            <TeamFilter selectedTeamId={selectedTeamId} onSelectTeam={handleSelectTeam} />

          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row bg-[#fafafa] rounded-2xl shadow-lg border border-gray-200/80 flex-grow">
            <nav className="w-full md:w-1/3 lg:w-2/5 p-4 pr-0 border-r border-gray-200/80">
                {currentOkrs.length > 0 ? (
                    <div className="space-y-2">
                        {currentOkrs.map(okr => (
                        <OkrPill
                            key={okr.id}
                            okr={okr}
                            isSelected={selectedOkr?.id === okr.id}
                            onSelect={() => handleSelectOkr(okr.id)}
                            searchQuery={searchQuery}
                        />
                        ))}
                    </div>
                ) : (
                    <div className="p-4 text-center text-gray-500">
                        {searchQuery ? `No se encontraron resultados para "${searchQuery}"` : 'No hay OKRs para este equipo.'}
                    </div>
                )}
            </nav>
            <div className="w-full md:w-2/3 lg:w-3/5">
                {selectedOkr ? <OkrDetailView okr={selectedOkr} selectedKrCode={selectedKrCode} onSelectTeamAndOkr={handleSelectTeamAndOkr} searchQuery={searchQuery}/> : (
                    <div className="h-full flex items-center justify-center p-8">
                        <p className="text-gray-500">{selectedTeam?.description || 'Seleccione un equipo para ver sus OKRs.'}</p>
                    </div>
                )}
            </div>
          </div>
      </main>
    </div>
  );
};

export default App;
