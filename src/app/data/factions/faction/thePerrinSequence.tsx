import FactionObject from "@/app/data/factions/FactionObject";

const THE_PERRIN_SEQUENCE = new FactionObject(
    'The Perrin Sequence',
    'thePerrinSequence',
    -2,
    5,
    true,
    ['newLoka'],
    ['arbitersOfHexis', 'steelMeridian'],
    {
        [-2]: '/images/factionImages/thePerrinSequence/0.webp',
        [-1]: '/images/factionImages/thePerrinSequence/1.webp',
        [0]:  '/images/factionImages/thePerrinSequence/2.webp',
        [1]:  '/images/factionImages/thePerrinSequence/3.webp',
        [2]:  '/images/factionImages/thePerrinSequence/4.webp',
        [3]:  '/images/factionImages/thePerrinSequence/5.webp',
        [4]:  '/images/factionImages/thePerrinSequence/6.webp',
        [5]:  '/images/factionImages/thePerrinSequence/7.webp',
    }
);

export default THE_PERRIN_SEQUENCE;