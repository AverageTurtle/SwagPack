ServerEvents.recipes(event => {
    function createPlateRecipes(input_item, output_item, processTime, hard, addModernIndustrialization) {
        event.custom({
            type: "indrev:compress",
            ingredients: [
                { item: input_item }
            ],
            output: [
                { item: output_item, count: 1 }
            ],
            processTime: processTime
        })
        event.custom({
            type: "energizedpower:compressor",
            ingredients: [
                { item: input_item }
            ],
            output: [
                { item: output_item }
            ],
        })
        event.custom({
            type:"ad_astra:compressing",
            input: { item: input_item },
            output: { id: output_item, count: 1 },
            cookTime: processTime
        })
        // TODO idk if we will actually use this
        if(!hard) {
            event.custom({
                type:"create:pressing",
                ingredients: [
                    { item: input_item }
                ],
                results: [
                    { item: output_item }
                ]
            })
        }
        if(addModernIndustrialization) {
            event.custom({
                type: "modern_industrialization:compressor",
                item_inputs: [
                    { 
                        item: input_item,
                        amount: 1
                    }
                ],
                item_outputs: [
                    { 
                        item: output_item, 
                        amount: 1 
                    }
                ],
                duration: processTime,
                eu: 2
            })
        }
    }
    // Copper
    event.remove({ output: "indrev:copper_plate" })
    event.remove({ output: "energizedpower:copper_plate" })
    event.remove({ output: "create:copper_sheet" })
    createPlateRecipes("minecraft:copper_ingot", "modern_industrialization:copper_plate", 200, false, false)

    // Iron
    event.remove({ output: "ad_astra:iron_plate" })
    event.remove({ output: "indrev:iron_plate" })
    event.remove({ output: "energizedpower:iron_plate" })
    event.remove({ output: "create:iron_sheet" })
    createPlateRecipes("minecraft:iron_ingot", "modern_industrialization:iron_plate", 200, false, false)

    // Gold
    event.remove({ output: "indrev:gold_plate" })
    event.remove({ output: "energizedpower:gold_plate" })
    event.remove({ output: "create:golden_sheet" })
    createPlateRecipes("minecraft:gold_ingot", "modern_industrialization:gold_plate", 200, false, false)

    // Tin
    event.remove({ output: "indrev:tin_plate" })
    createPlateRecipes("modern_industrialization:tin_ingot", "modern_industrialization:tin_plate", 200, false, false)

    // Ad Astra
    event.remove({ output: "ad_astra:desh_plate" })
    createPlateRecipes("ad_astra:desh_ingot", "ad_astra:desh_plate", 200, false, true)

    event.remove({ output: "ad_astra:ostrum_plate" })
    createPlateRecipes("ad_astra:ostrum_ingot", "ad_astra:ostrum_plate", 200, false, true)

    event.remove({ output: "ad_astra:calorite_plate" })
    createPlateRecipes("ad_astra:calorite_ingot", "ad_astra:calorite_plate", 200, false, true)
})