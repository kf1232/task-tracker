import Cookies from 'js-cookie';
import FactionObject from '@/app/data/factions/FactionObject';
import FACTION_LIST from '@/app/data/factions/factionList';

const COOKIE_NAME = 'factionData';
const COOKIE_EXPIRATION_DAYS = 365;

// Get default ranks for factions
export const getDefaultRanks = (factions: FactionObject[]): Record<string, number> =>
    factions.reduce((acc: Record<string, number>, faction) => {
        acc[faction.key] = faction.minRank;
        return acc;
    }, {});

// Load data from cookies
export const loadFactionData = (): { ranks: Record<string, number>; pledge: FactionObject | null; } => {
    const defaultRanks = getDefaultRanks(FACTION_LIST);
    try {
        const storedData = Cookies.get(COOKIE_NAME);
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            return {
                ranks: parsedData.ranks || defaultRanks,
                pledge: parsedData.pledge || null,
            };
        }
    } catch (error) {
        console.error('Error parsing faction data from cookies:', error);
    }
    return { ranks: defaultRanks, pledge: null };
};

// Save data to cookies
export const saveFactionData = (ranks: Record<string, number>, pledge: FactionObject | null): void => {
    const cookieData = JSON.stringify({ ranks, pledge });
    Cookies.set(COOKIE_NAME, cookieData, { expires: COOKIE_EXPIRATION_DAYS });
};
