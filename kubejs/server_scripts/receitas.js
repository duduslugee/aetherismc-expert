//priority 1000
//modern industrialization scripts
const removendo = [
    "structurecompass:structure_compass",
    "minecraft:netherite_ingot",
    "mekanism:processing/netherite/ingot_from_dust_blasting",
    "mekanism:processing/netherite/ingot_from_dust_smelting",
    "mekanism:/mekanism_generated/processing/netherite/ingot_from_dust_smelting",
    "mekanism:processing/netherite/ingot_from_dust_smelting_exported_mi_furnace",
    "modern_industrialization:vanilla_recipes/mixer/netherite"
];
  
ServerEvents.recipes(amcexpert => {
    removendo.forEach(receita =>{
        console.log("Receita "+receita+" removida com sucesso!");
        amcexpert.remove({id: receita});
    });

    //structure compass
    amcexpert.shaped('structurecompass:structure_compass',
        [
            'GRG',
            'GCG',
            'GRG'
        ],
        {
            'G': 'justdirethings:ferricore_gear',
            'C': 'structurecompass:structure_compass',
            'R': 'justdirethings:ferricore_rod'
        })

    //netherite mixed
    
    console.log('Receitas.js carregado!');
})