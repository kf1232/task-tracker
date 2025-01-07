import FactionObject from "@/app/data/factions/FactionObject"

export default function PledgeFactionButton(faction: FactionObject, pledge: FactionObject, handlePledgeChange: Function) {
    return faction.canPledge ?
        <button
            className={`px-4 py-1 rounded ${pledge?.key === faction.key ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
            onClick={() => {
                handlePledgeChange(faction)
            }}>
            {pledge?.key === faction.key ? 'Pledged' : 'Pledge'}
        </button>
        : null
}