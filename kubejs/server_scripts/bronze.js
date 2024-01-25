ServerEvents.recipes(event => {
    // remove indrev bronze
    //removeIndrevMaterial(event, "bronze", true, true)
    createPlateRecipes(event, "modern_industrialization:bronze_ingot", "modern_industrialization:bronze_plate", 200, false, false)
})