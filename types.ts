export type CountryCode = 'Latam' | 'MX' | 'AR' | 'Global';
export type TeamId = 'all' | 'dp' | 'ml' | 'da';

export interface Team {
    id: TeamId;
    name: string;
    description: string;
}

export interface CompanyObjective {
  text: string;
  countryCode: CountryCode;
}

export interface KeyResult {
  title:string;
  description: string;
  code: string;
}

export interface Initiative {
    text: string;
    children?: Initiative[];
}

export interface Okr {
  id: string;
  teamId: TeamId;
  parentOkrId?: string;
  emoji: string;
  title: string;
  subtitle: string;
  objective: string;
  keyResults: KeyResult[];
  initiatives?: Initiative[];
  // Properties below are mostly for 'all' team (consolidated view)
  tag?: string;
  tagColor?: string;
  companyObjectives?: CompanyObjective[];
}
