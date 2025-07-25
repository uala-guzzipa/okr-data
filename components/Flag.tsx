
import React from 'react';
import { CountryCode } from '../types';

interface FlagProps {
  countryCode: CountryCode;
}

const flagColors: Record<CountryCode, string> = {
  Latam: 'bg-blue-500',
  MX: 'bg-green-500',
  AR: 'bg-sky-400',
  Global: 'bg-gray-500'
};

const Flag: React.FC<FlagProps> = ({ countryCode }) => {
    let flagEmoji: string;
    switch(countryCode) {
        case 'MX':
            flagEmoji = '🇲🇽';
            break;
        case 'AR':
            flagEmoji = '🇦🇷';
            break;
        case 'Latam':
            flagEmoji = '🌎';
            break;
        case 'Global':
            flagEmoji = '🌍';
            break;
        default:
            flagEmoji = '🏳️';
    }

  return (
    <span className="text-lg mr-2" role="img" aria-label={`${countryCode} flag`}>
      {flagEmoji}
    </span>
  );
};

export default Flag;
