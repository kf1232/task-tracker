export default class FactionObject {
    name: string;
    key: string;
    minRank: number;
    maxRank: number;
    canPledge: boolean;
    allied: string[];
    opposed: string[];

    constructor(
        name: string,
        key: string,
        minRank: number,
        maxRank: number,
        canPledge: boolean,
        allied: string[],
        opposed: string[],
    ) {
        this.name = name;
        this.key = key;
        this.minRank = minRank;
        this.maxRank = maxRank;
        this.canPledge = canPledge;
        this.allied = allied;
        this.opposed = opposed;
    }

    getStatus(pledge: FactionObject): string {
        if (!pledge) return 'p4 rounded border bg-gray-100 border-gray-300'
        if (pledge.key === this.key) return 'p4 rounded border bg-green-200 border-green-300'
        if (pledge.allied.includes(this.key)) return 'p4 rounded border bg-green-200 border-green-300'
        if (pledge.opposed.includes(this.key)) return 'p4 rounded border bg-red-200 border-red-300'
        return 'p4 rounded border bg-gray-200 border-gray-300'
    }
}