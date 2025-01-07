import FactionObject from "@/app/data/factions/FactionObject";

const STEEL_MERIDIAN = new FactionObject(
    'Steel Meridian', 
    'steelMeridian', 
    -2, 
    5,
    true,
    ['redVeil'], 
    ['newLoka', 'thePerrinSequence'],
    {
        [-2]: '/images/factionImages/steelMeridian/0.webp',
        [-1]: '/images/factionImages/steelMeridian/1.webp',
        [0]:  '/images/factionImages/steelMeridian/2.webp',
        [1]:  '/images/factionImages/steelMeridian/3.webp',
        [2]:  '/images/factionImages/steelMeridian/4.webp',
        [3]:  '/images/factionImages/steelMeridian/5.webp',
        [4]:  '/images/factionImages/steelMeridian/6.webp',
        [5]:  '/images/factionImages/steelMeridian/7.webp',
    }
);

export default STEEL_MERIDIAN;