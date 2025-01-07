import React from "react";
import FactionObject from "@/app/data/factions/FactionObject";
import '@/styles/custom.css';

interface RaiseRankButtonProps {
    faction: FactionObject;
    ranks: { [key: string]: number };
    handleRankChange: (key: string, value: number, min: number, max: number) => void;
}

const RaiseRankButton: React.FC<RaiseRankButtonProps> = ({ faction, ranks, handleRankChange }) => {
    if (!faction || !ranks || typeof faction.maxRank === "undefined") {
        console.error("Invalid faction or ranks data:", { faction, ranks });
        return null;
    }

    const isDisabled = faction.maxRank === (ranks[faction.key] ?? 0);

    return (
        <button
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isDisabled ? "button-disabled" : "button-primary"
            }`}
            onClick={() => {
                if (!isDisabled) {
                    handleRankChange(
                        faction.key,
                        ranks[faction.key] + 1,
                        faction.minRank,
                        faction.maxRank
                    );
                }
            }}
            disabled={isDisabled}
        >
            +
        </button>
    );
};

export default RaiseRankButton;
