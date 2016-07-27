/*jslint node : true*/

module.exports = {
    //Locations
    LOCATION_DECK: 0x01,
    LOCATION_HAND: 0x02,
    LOCATION_MZONE: 0x04,
    LOCATION_SZONE: 0x08,
    LOCATION_GRAVE: 0x10,
    LOCATION_REMOVED: 0x20,
    LOCATION_EXTRA: 0x40,
    LOCATION_OVERLAY: 0x80,
    LOCATION_ONFIELD: 0x0c,
    LOCATION_FZONE: 0x100,
    LOCATION_PZONE: 0x200,

    //Positions
    POS_FACEUP_ATTACK: 0x1,
    POS_FACEDOWN_ATTACK: 0x2,
    POS_FACEUP_DEFENSE: 0x4,
    POS_FACEDOWN_DEFENSE: 0x8,
    POS_FACEUP: 0x5,
    POS_FACEDOWN: 0xa,
    POS_ATTACK: 0x3,
    POS_DEFENSE: 0xc,

    //Flip effect flags
    NO_FLIP_EFFECT: 0x10000,
    FLIP_SET_AVAILABLE: 0x20000,

    //Types
    TYPE_MONSTER: 0x1,
    TYPE_SPELL: 0x2,
    TYPE_TRAP: 0x4,
    TYPE_NORMAL: 0x10,
    TYPE_EFFECT: 0x20,
    TYPE_FUSION: 0x40,
    TYPE_RITUAL: 0x80,
    TYPE_TRAPMONSTER: 0x100,
    TYPE_SPIRIT: 0x200,
    TYPE_UNION: 0x400,
    TYPE_DUAL: 0x800,
    TYPE_TUNER: 0x1000,
    TYPE_SYNCHRO: 0x2000,
    TYPE_TOKEN: 0x4000,
    TYPE_QUICKPLAY: 0x10000,
    TYPE_CONTINUOUS: 0x20000,
    TYPE_EQUIP: 0x40000,
    TYPE_FIELD: 0x80000,
    TYPE_COUNTER: 0x100000,
    TYPE_FLIP: 0x200000,
    TYPE_TOON: 0x400000,
    TYPE_XYZ: 0x800000,
    TYPE_PENDULUM: 0x1000000,

    //Attributes
    ATTRIBUTE_EARTH: 0x01,
    ATTRIBUTE_WATER: 0x02,
    ATTRIBUTE_FIRE: 0x04,
    ATTRIBUTE_WIND: 0x08,
    ATTRIBUTE_LIGHT: 0x10,
    ATTRIBUTE_DARK: 0x20,
    ATTRIBUTE_DEVINE: 0x40,

    //Races
    RACE_WARRIOR: 0x1,
    RACE_SPELLCASTER: 0x2,
    RACE_FAIRY: 0x4,
    RACE_FIEND: 0x8,
    RACE_ZOMBIE: 0x10,
    RACE_MACHINE: 0x20,
    RACE_AQUA: 0x40,
    RACE_PYRO: 0x80,
    RACE_ROCK: 0x100,
    RACE_WINDBEAST: 0x200,
    RACE_PLANT: 0x400,
    RACE_INSECT: 0x800,
    RACE_THUNDER: 0x1000,
    RACE_DRAGON: 0x2000,
    RACE_BEAST: 0x4000,
    RACE_BEASTWARRIOR: 0x8000,
    RACE_DINOSAUR: 0x10000,
    RACE_FISH: 0x20000,
    RACE_SEASERPENT: 0x40000,
    RACE_REPTILE: 0x80000,
    RACE_PSYCHO: 0x100000,
    RACE_DEVINE: 0x200000,
    RACE_CREATORGOD: 0x400000,
    RACE_PHANTOMDRAGON: 0x800000,

    //Reason
    REASON_DESTROY: 0x1,
    REASON_RELEASE: 0x2,
    REASON_TEMPORARY: 0x4,
    REASON_MATERIAL: 0x8,
    REASON_SUMMON: 0x10,
    REASON_BATTLE: 0x20,
    REASON_EFFECT: 0x40,
    REASON_COST: 0x80,
    REASON_ADJUST: 0x100,
    REASON_LOST_TARGET: 0x200,
    REASON_RULE: 0x400,
    REASON_SPSUMMON: 0x800,
    REASON_DISSUMMON: 0x1000,
    REASON_FLIP: 0x2000,
    REASON_DISCARD: 0x4000,
    REASON_RDAMAGE: 0x8000,
    REASON_RRECOVER: 0x10000,
    REASON_RETURN: 0x20000,
    REASON_FUSION: 0x40000,
    REASON_SYNCHRO: 0x80000,
    REASON_RITUAL: 0x100000,
    REASON_XYZ: 0x200000,
    REASON_REPLACE: 0x1000000,
    REASON_DRAW: 0x2000000,
    REASON_REDIRECT: 0x4000000,

    //Summon Type
    SUMMON_TYPE_NORMAL: 0x10000000,
    SUMMON_TYPE_ADVANCE: 0x11000000,
    SUMMON_TYPE_DUAL: 0x12000000,
    SUMMON_TYPE_FLIP: 0x20000000,
    SUMMON_TYPE_SPECIAL: 0x40000000,
    SUMMON_TYPE_FUSION: 0x43000000,
    SUMMON_TYPE_RITUAL: 0x45000000,
    SUMMON_TYPE_SYNCHRO: 0x46000000,
    SUMMON_TYPE_XYZ: 0x49000000,
    SUMMON_TYPE_PENDULUM: 0x4a000000,

    //Status
    STATUS_DISABLED: 0x0001,
    STATUS_TO_ENABLE: 0x0002,
    STATUS_TO_DISABLE: 0x0004,
    STATUS_PROC_COMPLETE: 0x0008,
    STATUS_SET_TURN: 0x0010,
    STATUS_NO_LEVEL: 0x0020,
    STATUS_BATTLE_RESULT: 0x0040,
    STATUS_SPSUMMON_STEP: 0x0080,
    STATUS_FORM_CHANGED: 0x0100,
    STATUS_SUMMONING: 0x0200,
    STATUS_EFFECT_ENABLED: 0x0400,
    STATUS_SUMMON_TURN: 0x0800,
    STATUS_DESTROY_CONFIRMED: 0x1000,
    STATUS_LEAVE_CONFIRMED: 0x2000,
    STATUS_BATTLE_DESTROYED: 0x4000,
    STATUS_COPYING_EFFECT: 0x8000,
    STATUS_CHAINING: 0x10000,
    STATUS_SUMMON_DISABLED: 0x20000,
    STATUS_ACTIVATE_DISABLED: 0x40000,
    STATUS_EFFECT_REPLACED: 0x80000,
    STATUS_UNION: 0x100000,
    STATUS_ATTACK_CANCELED: 0x200000,
    STATUS_INITIALIZING: 0x400000,
    STATUS_ACTIVATED: 0x800000,
    STATUS_JUST_POS: 0x1000000,
    STATUS_CONTINUOUS_POS: 0x2000000,
    STATUS_FORBIDDEN: 0x4000000,
    STATUS_ACT_FROM_HAND: 0x8000000,
    STATUS_OPPO_BATTLE: 0x10000000,
    STATUS_FLIP_SUMMON_TURN: 0x20000000,
    STATUS_SPSUMMON_TURN: 0x40000000,

    //Counter
    COUNTER_WITHOUT_PERMIT: 0x1000,
    COUNTER_NEED_ENABLE: 0x2000,

    //Query list
    QUERY_CODE: 0x1,
    QUERY_POSITION: 0x2,
    QUERY_ALIAS: 0x4,
    QUERY_TYPE: 0x8,
    QUERY_LEVEL: 0x10,
    QUERY_RANK: 0x20,
    QUERY_ATTRIBUTE: 0x40,
    QUERY_RACE: 0x80,
    QUERY_ATTACK: 0x100,
    QUERY_DEFENSE: 0x200,
    QUERY_BASE_ATTACK: 0x400,
    QUERY_BASE_DEFENSE: 0x800,
    QUERY_REASON: 0x1000,
    QUERY_REASON_CARD: 0x2000,
    QUERY_EQUIP_CARD: 0x4000,
    QUERY_TARGET_CARD: 0x8000,
    QUERY_OVERLAY_CARD: 0x10000,
    QUERY_COUNTERS: 0x20000,
    QUERY_OWNER: 0x40000,
    QUERY_IS_DISABLED: 0x80000,
    QUERY_IS_PUBLIC: 0x100000,
    QUERY_LSCALE: 0x200000,
    QUERY_RSCALE: 0x400000,

    ASSUME_CODE: 1,
    ASSUME_TYPE: 2,
    ASSUME_LEVEL: 3,
    ASSUME_RANK: 4,
    ASSUME_ATTRIBUTE: 5,
    ASSUME_RACE: 6,
    ASSUME_ATTACK: 7,
    ASSUME_DEFENSE: 8
};