'use client';

import { useState, useEffect } from 'react';
import FactionObject from '@/app/data/factions/FactionObject';
import FACTION_LIST from '@/app/data/factions/factionList';
import LowerFactionButton from './buttonLowerFactionRank';
import RaiseRankButton from './buttonRaiseFactionRank';
import PledgeFactionButton from './buttonPledgeFaction';

export default function Settings() {
    function getDefaultRanks(factions: FactionObject[]): Record<string, number> {
        return factions.reduce((acc, faction) => {
            acc[faction.key] = faction.minRank;
            return acc
        }, {} as Record<string,number>);
    }

    const [pledge, setPledge] = useState<FactionObject | null>(null);
    const [ranks, setRanks] = useState<{ [key: string]: number }>(getDefaultRanks(FACTION_LIST));

    useEffect(() => {
        const storedData = localStorage.getItem('factionData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            console.log(parsedData)
            setRanks(parsedData.ranks || ranks);
            setPledge(parsedData.pledge || pledge);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('factionData', JSON.stringify({ ranks, pledge }));
    }, [ranks, pledge]);

    const handleRankChange = (key: string, value: number, min: number, max: number) => {
        setRanks((prev) => ({
            ...prev,
            [key]: Math.min(max, Math.max(min, value)),
        }))
    };

    const handlePledgeChange = (faction: FactionObject) => {
        setPledge(faction);
    }

    return (
        <div className='p-4'>
            <h1 className='text-2x1 font-bold mb-4'> Faction Settings </h1>
            <div className='space-y-4'>
                {FACTION_LIST.map((faction) => (
                    <div key={faction.key}
                        className={faction.getStatus(pledge)}>
                        <span className='w-40'>{faction.name} : {ranks[faction.key] ? ranks[faction.key] : 0}</span>

                        {LowerFactionButton(faction, ranks, handleRankChange)}

                        {RaiseRankButton(faction, ranks, handleRankChange)}

                        {PledgeFactionButton(faction, pledge, handlePledgeChange)}
                    </div>
                ))}
            </div>
        </div>
    )
}