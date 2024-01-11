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
    // ad astra
    "ad_astra:hammer",
    
    // energized power
    "energizedpower:wooden_hammer",
    "energizedpower:stone_hammer",
    "energizedpower:iron_hammer",
    "energizedpower:golden_hammer",
    "energizedpower:diamond_hammer",
    "energizedpower:netherite_hammer",
    "energizedpower:silicon",
    // hide unused copper plates
    "create:copper_sheet",
    "indrev:copper_plate",
    "energizedpower:copper_plate",
    // hide unused iron plates
    "create:iron_sheet",
    "indrev:iron_plate",
    "energizedpower:iron_plate",
    "ad_astra:iron_plate",
    // hide unused gold plates
    "create:golden_sheet",
    "indrev:gold_plate",
    "energizedpower:gold_plate"
];

REIEvents.hide('item', (event) => {
    HIDDEN_ITEMS.forEach(id => event.hide(id));
});