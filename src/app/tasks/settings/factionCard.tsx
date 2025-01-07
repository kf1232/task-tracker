import React from 'react';
import FactionObject from '@/app/data/factions/FactionObject';
import LowerFactionButton from '@/app/tasks/settings/buttonLowerFactionRank';
import RaiseRankButton from '@/app/tasks/settings/buttonRaiseFactionRank';
import PledgeFactionButton from '@/app/tasks/settings/buttonPledgeFaction';
import '@/styles/custom.css'

interface FactionCardProps {
    faction: FactionObject;
    ranks: { [key: string]: number };
    pledge: FactionObject | null;
    handleRankChange: (key: string, value: number, min: number, max: number) => void;
    handlePledgeChange: (faction: FactionObject) => void;
}

const FactionCard: React.FC<FactionCardProps> = ({
    faction,
    ranks,
    pledge,
    handleRankChange,
    handlePledgeChange,
}) => {
    const currentRank = ranks[faction.key];
    const range = faction.maxRank - faction.minRank;
    const normalizedProgress =
        range === 0
            ? 100 // Avoid division by 0 when minRank === maxRank
            : ((currentRank - faction.minRank) / range) * 100;

    const progressBarClass = faction.getProgressBarClass(pledge);
    const borderClass = faction.getBorderClass(pledge);
    const backgroundImage = faction.getImagePath(currentRank);

    return (
        <div
            key={faction.key}
            className={`card border rounded-lg p-4 ${borderClass}`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'contain',
                backgroundPosition: 'right',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">{faction.name}</span>
                <span className="text-sm text-primary">Rank: {currentRank}</span>
            </div>

            <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden mb-4">
                <div
                    className={`absolute top-0 left-0 h-full transition-all duration-300 ${progressBarClass}`}
                    style={{
                        width: `${Math.max(0, normalizedProgress)}%`,
                    }}
                ></div>
            </div>

            <div className="flex items-center gap-4">
                <LowerFactionButton
                    faction={faction}
                    ranks={ranks}
                    handleRankChange={handleRankChange}
                />
                <RaiseRankButton
                    faction={faction}
                    ranks={ranks}
                    handleRankChange={handleRankChange}
                />
                <PledgeFactionButton
                    faction={faction}
                    pledge={pledge}
                    handlePledgeChange={handlePledgeChange}
                />
            </div>
        </div>
    );
};

export default FactionCard;
