const HIDDEN_ITEMS = [
    "kibe:pocket_crafting_table",
    // indrev
    "indrev:hammer",
    "indrev:tin_ore",
    "indrev:deepslate_tin_ore",
    "indrev:raw_tin_block",
    "indrev:raw_tin",
    "indrev:tin_block",
    "indrev:tin_ingot",
    "indrev:tin_dust",
    "indrev:tin_plate",
    "indrev:tin_nugget",
    // mythic metals
    "mythicmetals:tin_ingot",
    "mythicmetals:raw_tin",
    "mythicmetals:tin_nugget",
    "mythicmetals:tin_ore",
    "mythicmetals:raw_tin_block",
    "mythicmetals:tin_block",
    // energized power
    "energizedpower:wooden_hammer",
    "energizedpower:stone_hammer",
    "energizedpower:iron_hammer",
    "energizedpower:gold_hammer",
    "energizedpower:diamond_hammer",
    "energizedpower:netherite_hammer",
];

REIEvents.hide('item', (event) => {
    HIDDEN_ITEMS.forEach(id => event.hide(id));
});