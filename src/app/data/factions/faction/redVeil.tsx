import FactionObject from "@/app/data/factions/FactionObject";

const RED_VEIL = new FactionObject(
    'Red Veil',
    'redVeil',
    -2,
    5,
    true,
    ['steelMeridian'],
    ['cephalonSuda', 'arbitersOfHexis'],
    {
        [-2]: '/images/factionImages/redVeil/0.webp',
        [-1]: '/images/factionImages/redVeil/1.webp',
        [0]:  '/images/factionImages/redVeil/2.webp',
        [1]:  '/images/factionImages/redVeil/3.webp',
        [2]:  '/images/factionImages/redVeil/4.webp',
        [3]:  '/images/factionImages/redVeil/5.webp',
        [4]:  '/images/factionImages/redVeil/6.webp',
        [5]:  '/images/factionImages/redVeil/7.webp',
    }
);

export default RED_VEIL;