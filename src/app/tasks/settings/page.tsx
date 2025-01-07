'use client';

import '@/styles/globals.css';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import FactionObject from '@/app/data/factions/FactionObject';
import FACTION_LIST from '@/app/data/factions/factionList';
import FACTION_SYNDICATES from '@/app/data/factions/factionSyndicates';
import FactionCard from './factionCard';

export default function Settings() {
    const COOKIE_NAME = 'factionData';
    const COOKIE_EXPIRATION_DAYS = 365;

    // Helper to get default ranks for any faction list
    const getDefaultRanks = (factions: FactionObject[]): Record<string, number> =>
        factions.reduce((acc: Record<string, number>, faction) => {
            acc[faction.key] = faction.minRank;
            return acc;
        }, {});

    // State for factions and syndicates
    const [pledge, setPledge] = useState<FactionObject | null>(null);
    const [s_ranks, setSRanks] = useState<Record<string, number>>(getDefaultRanks(FACTION_SYNDICATES));
    const [f_ranks, setFRanks] = useState<Record<string, number>>(getDefaultRanks(FACTION_LIST));

    // Load data from cookies
    useEffect(() => {
        const storedData = Cookies.get(COOKIE_NAME);
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                setFRanks(parsedData.f_ranks || f_ranks);
                setSRanks(parsedData.s_ranks || s_ranks);
                setPledge(parsedData.pledge || pledge);
            } catch (error) {
                console.error('Error parsing faction data from cookies:', error);
                // Optional: Add fallback UI or user notification
            }
        }
    }, []);

    // Save data to cookies whenever state changes
    useEffect(() => {
        const cookieData = JSON.stringify({ f_ranks, s_ranks, pledge });
        Cookies.set(COOKIE_NAME, cookieData, { expires: COOKIE_EXPIRATION_DAYS });
    }, [f_ranks, s_ranks, pledge]);

    // Generic rank change handler
    const handleRankChange = (type: 'faction' | 'syndicate', key: string, value: number, min: number, max: number) => {
        const updateFn = type === 'faction' ? setFRanks : setSRanks;
        updateFn((prev) => ({
            ...prev,
            [key]: Math.min(max, Math.max(min, value)),
        }));
    };

    const handlePledgeChange = (faction: FactionObject) => {
        setPledge(faction);
    };

    return (
        <div className="bg-dark min-h-screen p-6 text-secondary">
            <h1 className="text-4xl font-bold text-primary mb-6">Faction Settings</h1>

            {/* Syndicates Section */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">Syndicates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FACTION_SYNDICATES.map((faction) => (
                        <FactionCard
                            key={faction.key}
                            faction={faction}
                            ranks={s_ranks}
                            pledge={pledge}
                            handleRankChange={(key, value, min, max) =>
                                handleRankChange('syndicate', key, value, min, max)
                            }
                            handlePledgeChange={handlePledgeChange}
                        />
                    ))}
                </div>
            </div>

            {/* General Factions Section */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-primary mb-4">General Factions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FACTION_LIST.map((faction) => (
                        <FactionCard
                            key={faction.key}
                            faction={faction}
                            ranks={f_ranks}
                            pledge={pledge}
                            handleRankChange={(key, value, min, max) =>
                                handleRankChange('faction', key, value, min, max)
                            }
                            handlePledgeChange={handlePledgeChange}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}