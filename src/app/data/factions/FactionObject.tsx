export default class FactionObject {
    name: string;
    key: string;
    minRank: number;
    maxRank: number;
    canPledge: boolean;
    allied: string[];
    opposed: string[];
    imagePaths?: { [rank: number]: string };

    constructor(
        name: string,
        key: string,
        minRank: number,
        maxRank: number,
        canPledge: boolean,
        allied: string[],
        opposed: string[],
        imagePaths?: { [rank: number]: string }
    ) {
        this.name = name;
        this.key = key;
        this.minRank = minRank;
        this.maxRank = maxRank;
        this.canPledge = canPledge;
        this.allied = allied;
        this.opposed = opposed;
        this.imagePaths = imagePaths;
    }

    getImagePath(currentRank: number): string {
        if (!this.imagePaths) return '';
        return this.imagePaths[currentRank] || '';
    }

    getBorderClass(pledge: FactionObject | null): string {
        if (!pledge) return 'border-gray-100';
        if (pledge.key === this.key) return 'border-green-500';
        if (pledge.allied.includes(this.key)) return 'border-green-500';
        if (pledge.opposed.includes(this.key)) return 'border-red-500';
        return 'border-gray-100';
    }

    getProgressBarClass(pledge: FactionObject | null): string {
        if (!pledge) return 'bg-gray-100';
        if (pledge.key === this.key) return 'bg-green-500';
        if (pledge.allied.includes(this.key)) return 'bg-green-500';
        if (pledge.opposed.includes(this.key)) return 'bg-red-500';
        return 'bg-gray-100';
    }
}
