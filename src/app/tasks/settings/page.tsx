'use client';

import { useState, useEffect } from 'react';
import FactionObject from '@/app/data/factions/FactionObject';
import FACTION_LIST from '@/app/data/factions/factionList';
import FACTION_SYNDICATES from '@/app/data/factions/factionSyndicates';
import FactionCard from './factionCard';

export default function Settings() {
    const getDefaultRanks = (factions: FactionObject[]): Record<string, number> =>
        factions.reduce((acc: Record<string, number>, faction) => {
            acc[faction.key] = faction.minRank;
            return acc;
        }, {});
    

    const [pledge, setPledge] = useState<FactionObject | null>(null);
    const [ranks, setRanks] = useState<Record<string, number>>(getDefaultRanks(FACTION_LIST));

    useEffect(() => {
        const storedData = localStorage.getItem('factionData');
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                setRanks(parsedData.ranks || ranks);
                setPledge(parsedData.pledge || pledge);
            } catch (error) {
                console.error('Error parsing faction data:', error);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('factionData', JSON.stringify({ ranks, pledge }));
    }, [ranks, pledge]);

    const handleRankChange = (key: string, value: number, min: number, max: number) => {
        setRanks((prev) => ({
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FACTION_SYNDICATES.map((faction) => (
                    <FactionCard
                        key={faction.key}
                        faction={faction}
                        ranks={ranks}
                        pledge={pledge}
                        handleRankChange={handleRankChange}
                        handlePledgeChange={handlePledgeChange}
                    />
                ))}
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FACTION_LIST.map((faction) => (
                    <FactionCard
                        key={faction.key}
                        faction={faction}
                        ranks={ranks}
                        pledge={pledge}
                        handleRankChange={handleRankChange}
                        handlePledgeChange={handlePledgeChange}
                    />
                ))}
            </div>
        </div>
    );
}