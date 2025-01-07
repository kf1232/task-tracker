import Cookies from 'js-cookie';

export interface DailyActivity {
    id: string;
    name: string;
    description: string;
    faction?: string; // Optional link to a faction key
    resetTime: string; // ISO string representing daily reset
    completed: boolean;
}

export const defaultDailyActivities: DailyActivity[] = [
    {
        id: '1',
        name: 'Syndicate Standing Cap',
        description: 'Earn standing with primary and open-world syndicates.',
        faction: 'syndicate', // Link to a faction key if applicable
        resetTime: new Date().toISOString(),
        completed: false,
    },
    {
        id: '2',
        name: 'Sortie Missions',
        description: 'Complete high-level missions for unique rewards.',
        resetTime: new Date().toISOString(),
        completed: false,
    },
    {
        id: '3',
        name: 'Ayatan Treasure Hunt',
        description: 'Complete Maroo’s treasure hunt for sculptures or stars.',
        resetTime: new Date().toISOString(),
        completed: false,
    },
];



const COOKIE_NAME = 'dailyTaskData';

// Helper to calculate the expiration time for cookies at 00:00 GMT
const calculateGMTMidnightExpiration = (): Date => {
    const now = new Date();
    const utcNow = new Date(now.toISOString()); // Ensure UTC time
    utcNow.setUTCHours(0, 0, 0, 0); // Set to the start of the current day
    if (now.getUTCHours() >= 0) {
        utcNow.setUTCDate(utcNow.getUTCDate() + 1); // Move to the next day if we're past midnight UTC
    }
    return utcNow;
};

// Load data from cookies or use defaults
export const loadDailyTaskData = (): DailyActivity[] => {
    try {
        const storedData = Cookies.get(COOKIE_NAME);
        if (storedData) {
            return JSON.parse(storedData);
        }
    } catch (error) {
        console.error('Error parsing daily task data from cookies:', error);
    }
    return defaultDailyActivities;
};

// Save data to cookies with expiration set to 00:00 GMT
export const saveDailyTaskData = (activities: DailyActivity[]): void => {
    const cookieData = JSON.stringify(activities);
    const expirationDate = calculateGMTMidnightExpiration();
    Cookies.set(COOKIE_NAME, cookieData, { expires: expirationDate });
};

// Toggle task completion
export const toggleTaskCompletion = (id: string): void => {
    const activities = loadDailyTaskData();
    const taskIndex = activities.findIndex((activity) => activity.id === id);
    if (taskIndex > -1) {
        activities[taskIndex].completed = !activities[taskIndex].completed;
        saveDailyTaskData(activities);
    }
};
