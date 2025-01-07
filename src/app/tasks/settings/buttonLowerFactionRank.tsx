import FactionObject from "@/app/data/factions/FactionObject"

export default function LowerFactionButton(faction: FactionObject, ranks: { [key: string]: number }, handleRankChange: Function) {
    return faction.minRank === ranks[faction.key] ?
        <button
            className='px-2 py-1 bg-gray-200 rounded cursor-not-allowed opacity-50'
            onClick={() => {
                handleRankChange(faction.key, ranks[faction.key] - 1, faction.minRank, faction.maxRank)
            }}>
            -
        </button>
        :
        <button
            className='px-2 py-1 bg-gray-300 rounded hover:bg-gray-400'
            onClick={() => {
                handleRankChange(faction.key, ranks[faction.key] - 1, faction.minRank, faction.maxRank)
            }}>
            -
        </button>
}