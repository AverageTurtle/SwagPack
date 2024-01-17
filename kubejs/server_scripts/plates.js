ServerEvents.recipes(event => {
    // TODO move to material scripts
    // Tin
    event.remove({ output: "indrev:tin_plate" })
    createPlateRecipes(event, "modern_industrialization:tin_ingot", "modern_industrialization:tin_plate", 200, false, false)

    // Ad Astra
    event.remove({ output: "ad_astra:desh_plate" })
    createPlateRecipes(event, "ad_astra:desh_ingot", "ad_astra:desh_plate", 200, false, true)

    event.remove({ output: "ad_astra:ostrum_plate" })
    createPlateRecipes(event, "ad_astra:ostrum_ingot", "ad_astra:ostrum_plate", 200, false, true)

    event.remove({ output: "ad_astra:calorite_plate" })
    createPlateRecipes(event, "ad_astra:calorite_ingot", "ad_astra:calorite_plate", 200, false, true)
})