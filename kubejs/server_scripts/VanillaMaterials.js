ServerEvents.recipes(event => {
    function createVanillaMaterialIndrevPulverizeRecipes(material, processTime) {
        // vanilla
        indrevPulverizeTagRecipe(event, "c:"+material+"_ingots", 1, "modern_industrialization:"+material+"_dust", 1, processTime)
        indrevPulverizeTagRecipe(event, "c:"+material+"_ores", 1, "minecraft:raw_"+material+"", 3, processTime)
        indrevPulverizeTagRecipe(event, "c:"+material+"_nuggets", 1, "modern_industrialization:"+material+"_tiny_dust", 1, processTime)

        // modern industrialization compat
        indrevPulverizeRecipe(event, "modern_industrialization:"+material+"_bolt", 1, "modern_industrialization:"+material+"_tiny_dust", 2, processTime)
        indrevPulverizeRecipe(event, "modern_industrialization:"+material+"_double_ingot", 1, "modern_industrialization:"+material+"_dust", 2, processTime)
        indrevPulverizeTagRecipe(event, "c:"+material+"_gears", 1, "modern_industrialization:"+material+"_dust", 2, processTime)
        indrevPulverizeRecipe(event, "modern_industrialization:"+material+"_large_plate", 1, "modern_industrialization:"+material+"_dust", 4, processTime)
        indrevPulverizeTagRecipe(event, "c:"+material+"_plates", 1, "modern_industrialization:"+material+"_dust", 1, processTime)
        indrevPulverizeRecipe(event, "modern_industrialization:"+material+"_ring", 1, "modern_industrialization:"+material+"_tiny_dust", 4, processTime)
        indrevPulverizeRecipe(event, "modern_industrialization:"+material+"_rod", 1, "modern_industrialization:"+material+"_tiny_dust", 4, processTime)
    }
    function createVanillaMaterialEPPulverizerRecipes(material) {
        // vanilla
        epPulverizerTagRecipe(event, "c:"+material+"_ingots", "modern_industrialization:"+material+"_dust", [ 1.0 ])
        epPulverizerTagRecipe(event, "c:"+material+"_ores", "minecraft:raw_"+material+"", [ 1.0, 1.0, 1.0 ])
        epPulverizerTagRecipe(event, "c:"+material+"_nuggets", "modern_industrialization:"+material+"_tiny_dust", [ 1.0 ])

        // modern industrialization compat
        epPulverizerRecipe(event, "modern_industrialization:"+material+"_bolt", "modern_industrialization:"+material+"_tiny_dust", [ 1.0, 1.0 ])
        epPulverizerRecipe(event, "modern_industrialization:"+material+"_double_ingot", "modern_industrialization:"+material+"_dust", [ 1.0, 1.0 ])
        epPulverizerTagRecipe(event, "c:"+material+"_gears", "modern_industrialization:"+material+"_dust", [ 1.0, 1.0 ])
        epPulverizerRecipe(event, "modern_industrialization:"+material+"_large_plate", "modern_industrialization:"+material+"_dust", [ 1.0, 1.0, 1.0 ])
        epPulverizerTagRecipe(event, "c:"+material+"_plates", "modern_industrialization:"+material+"_dust", [ 1.0 ])
        epPulverizerRecipe(event, "modern_industrialization:"+material+"_ring", "modern_industrialization:"+material+"_tiny_dust", [ 1.0, 1.0, 1.0 ])
        epPulverizerRecipe(event, "modern_industrialization:"+material+"_rod", "modern_industrialization:"+material+"_tiny_dust", [ 1.0, 1.0, 1.0 ])
    }

    // Copper

    //event.remove({ output: "indrev:copper_plate" })     //TODO uncomment when indrev is back!
    event.remove({ output: "energizedpower:copper_plate" })
    event.remove({ output: "create:copper_sheet" })
    createPlateRecipes(event, "minecraft:copper_ingot", "modern_industrialization:copper_plate", 200, false, false)

    //event.remove({ output: "indrev:copper_dust" })     //TODO uncomment when indrev is back!
    event.remove({ output: "energizedpower:copper_dust" })
    createVanillaMaterialIndrevPulverizeRecipes("copper", 100)
    createVanillaMaterialEPPulverizerRecipes("copper")


    // Iron
    event.remove({ output: "ad_astra:iron_plate" })
    //event.remove({ output: "indrev:iron_plate" })     //TODO uncomment when indrev is back!
    event.remove({ output: "energizedpower:iron_plate" })
    event.remove({ output: "create:iron_sheet" })
    createPlateRecipes(event, "minecraft:iron_ingot", "modern_industrialization:iron_plate", 200, false, false)

    //event.remove({ output: "indrev:iron_dust" })      //TODO uncomment when indrev is back!
    event.remove({ output: "energizedpower:iron_dust" })
    createVanillaMaterialIndrevPulverizeRecipes("iron", 200)
    createVanillaMaterialEPPulverizerRecipes("iron")

    // Gold
    //event.remove({ output: "indrev:gold_plate" })     //TODO uncomment when indrev is back!
    event.remove({ output: "energizedpower:gold_plate" })
    event.remove({ output: "create:golden_sheet" })
    createPlateRecipes(event, "minecraft:gold_ingot", "modern_industrialization:gold_plate", 200, false, false)

    
    //event.remove({ output: "indrev:gold_dust" })      //TODO uncomment when indrev is back!
    event.remove({ output: "energizedpower:gold_dust" })
    createVanillaMaterialIndrevPulverizeRecipes("gold", 100)
    createVanillaMaterialEPPulverizerRecipes("gold")
})