import FactionObject from "@/app/data/factions/FactionObject";

const NEW_LOKA = new FactionObject(
    'New Loka',
    'newLoka',
    -2,
    5,
    true,
    ['thePerrinSequence'],
    ['steelMeridian', 'cephalonSuda'],
    {
        [-2]: '/images/factionImages/newLoka/0.webp',
        [-1]: '/images/factionImages/newLoka/1.webp',
        [0]:  '/images/factionImages/newLoka/2.webp',
        [1]:  '/images/factionImages/newLoka/3.webp',
        [2]:  '/images/factionImages/newLoka/4.webp',
        [3]:  '/images/factionImages/newLoka/5.webp',
        [4]:  '/images/factionImages/newLoka/6.webp',
        [5]:  '/images/factionImages/newLoka/7.webp',
    }
);

export default NEW_LOKA;