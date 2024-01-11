ServerEvents.recipes(event => {
    // Portable Crafting
    event.remove({ output: "kibe:pocket_crafting_table" })
    event.replaceInput(
        { mod: "portable_tables"},
        "minecraft:stick",
        "#minecraft:signs"
    )

    // Diamond Chest/Barrel
    event.replaceInput(
        { mod: "expandedstorage", input: "#c:glass"},
        "#c:glass",
        "minecraft:diamond"
    )

    // Remove Indrev Hammer
    event.remove({ output: "indrev:hammer" })
    event.remove({ input: "indrev:hammer" })

    // Remove Indrev tin
    event.remove({ output: "indrev:raw_tin_block" })
    event.remove({ output: "indrev:raw_tin" })
    event.remove({ output: "indrev:tin_block" })
    event.remove({ output: "indrev:tin_ingot" })

    // dust
    event.remove({ output: "indrev:tin_dust" })
    event.custom({
        type: "indrev:pulverize",
        ingredients: [
            { item: "indrev:tin_chunk" }
        ],
        output: [
            { item: "modern_industrialization:tin_dust", count: 1 }
        ],
        processTime: 200
    })
    event.custom({
        type: "indrev:pulverize",
        ingredients: [
            { tag: "c:tin_ingots" }
        ],
        output: [
            { item: "modern_industrialization:tin_dust", count: 1 }
        ],
        processTime: 150
    })
    event.custom({
        type: "indrev:pulverize",
        ingredients: [
            { tag: "c:tin_ores" }
        ],
        output: [
            { item: "modern_industrialization:tin_dust", count: 3 }
        ],
        processTime: 200
    })
    event.custom({
        type: "indrev:pulverize",
        ingredients: [
            { item: "indrev:tin_purified_ore" }
        ],
        output: [
            { item: "modern_industrialization:tin_dust", count: 3 }
        ],
        processTime: 200
    })
    event.custom({
        type: "indrev:pulverize",
        ingredients: [
            { tag: "c:raw_tin_ores", count: 2 }
        ],
        output: [
            { item: "modern_industrialization:tin_dust", count: 3 }
        ],
        processTime: 200
    })
    
    // plate
    event.remove({ output: "indrev:tin_plate" })
    event.custom({
        type: "indrev:compress",
        ingredients: [
            { tag: "c:tin_ingots" }
        ],
        output: [
            { item: "modern_industrialization:tin_plate", count: 1 }
        ],
        processTime: 400
    })

    event.remove({ output: "indrev:tin_nugget" })

    // Remove Mythic Metal Tin
    event.remove({ output: "mythicmetals:tin_ingot" })
    event.remove({ output: "mythicmetals:raw_tin" })
    event.remove({ output: "mythicmetals:tin_nugget" })
    event.remove({ output: "mythicmetals:tin_ore" })
    event.remove({ output: "mythicmetals:raw_tin_block" })
    event.remove({ output: "mythicmetals:tin_block" })

    // Fix star platinum knife
    event.remove({ output: "farmersknives:star_platinum_knife" })
    event.shaped(
        Item.of("farmersknives:star_platinum_knife", 1),
        [
            " R",
            "S "
        ],
        {
            R: "mythicmetals:star_platinum",
            S: "minecraft:stick"
        }
    )
})