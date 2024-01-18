//priority: 10

// ONLY REMOVES RECIPES!!
// Doesn't include ores atm
function removeIndrevMaterial(event, material, removeTools, removeArmor) {
    //TODO uncomment when indrev is back!
    /*
    event.remove({ output: "indrev:${material}_block" })
    event.remove({ output: "indrev:${material}_ingot" })
    event.remove({ output: "indrev:${material}_dust" })
    event.remove({ output: "indrev:${material}_plate" })
    event.remove({ output: "indrev:${material}_nugget" })
    // tools
    if(removeTools) {
        event.remove({ output: "indrev:${material}_sword" })
        event.remove({ output: "indrev:${material}_pickaxe" })
        event.remove({ output: "indrev:${material}_axe" })
        event.remove({ output: "indrev:${material}_shovel" })
        event.remove({ output: "indrev:${material}_hoe" })
    }
    
    // armor
    if(removeArmor) {
        event.remove({ output: "indrev:${material}_helmet" })
        event.remove({ output: "indrev:${material}_chestplate" })
        event.remove({ output: "indrev:${material}_leggings" })
        event.remove({ output: "indrev:${material}_boots" })
    }
    */
}

function epPulverizerRecipe(event, input_item, output_item, output_percentages) {
    event.custom({
        type: "energizedpower:pulverizer",
        ingredient: {
            item: input_item,
        },
        output: {
            output: {
                item: output_item,
            },
            percentages: output_percentages
        }
    })
}
function epPulverizerTagRecipe(event, input_item, output_item, output_percentages) {
    event.custom({
        type: "energizedpower:pulverizer",
        ingredient: {
            tag: input_item,
        },
        output: {
            output: {
                item: output_item,
            },
            percentages: output_percentages
        }
    })
}

function indrevPulverizeRecipe(event, input_item, input_count, output_item, output_count, processT) {
    //TODO uncomment when indrev is back!
    /*
    event.custom({
        type: "indrev:pulverize",
        ingredients: {
            item: input_item,
            count: input_count
        },
        output: {
            item: output_item,
            count: output_count
        },
        processTime: processT
    })
    */
}
function indrevPulverizeTagRecipe(event, input_tag, input_count, output_item, output_count, processT) {
    //TODO uncomment when indrev is back!
    /*
    event.custom({
        type: "indrev:pulverize",
        ingredients: {
            tag: input_tag,
            count: input_count
        },
        output: {
            item: output_item,
            count: output_count
        },
        processTime: processT
    })
    */
}

function createPlateRecipes(event, input_item, output_item, processT, hard, addModernIndustrialization) {
    //TODO uncomment when indrev is back!
    /*
    event.custom({
        type: "indrev:compress",
        ingredients: [
            { item: input_item }
        ],
        output: [
            { item: output_item, count: 1 }
        ],
        processTime: processT
    })
    */
   
    event.custom({
        type: "energizedpower:compressor",
        ingredient: { item: input_item },
        output: { item: output_item }
    })
    event.custom({
        type:"ad_astra:compressing",
        ingredient: { item: input_item },
        result: { id: output_item, count: 1 },
        cookingtime: processT,
        energy: 20
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
            duration: processT,
            eu: 2
        })
    }
}