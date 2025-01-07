import React from "react";
import FactionObject from "@/app/data/factions/FactionObject";
import '@/styles/custom.css';

interface PledgeFactionButtonProps {
    faction: FactionObject;
    pledge: FactionObject | null;
    handlePledgeChange: (faction: FactionObject) => void;
}

const PledgeFactionButton: React.FC<PledgeFactionButtonProps> = ({ faction, pledge, handlePledgeChange }) => {
    if (!faction || typeof faction.canPledge === "undefined") {
        console.error("Invalid faction data:", { faction });
        return null;
    }

    if (!faction.canPledge) {
        return null;
    }

    const isPledged = pledge?.key === faction.key;

    return (
        <button
            className={`uniform-button px-4 py-2 rounded-lg transition-all duration-300 ${
                isPledged ? "button-primary" : "button-secondary-enhanced"
            }`}
            onClick={() => handlePledgeChange(faction)}
        >
            {isPledged ? "Pledged" : "Pledge"}
        </button>
    );
};

export default PledgeFactionButton;
