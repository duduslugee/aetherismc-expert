//priority 1000
//modern industrialization scripts
const removendoMI = [
  "modern_industrialization:materials/steel/craft/hammer",
  "modern_industrialization:materials/iron/craft/hammer",
  "modern_industrialization:materials/diamond/craft/hammer",
  "modern_industrialization:tools/smithing/netherite_hammer",
  "modern_industrialization:forge_hammer",
  "modern_industrialization:vanilla_recipes/steel_forge_hammer_asbl",
  "modern_industrialization:steam_age/bronze/machine_casing_asbl"
];

ServerEvents.recipes(amcexpert => {
    //removendo tudo
    removendoMI.forEach((recipe) => {
      console.log("Removendo Recipe: " + recipe);
      amcexpert.remove({ id: recipe });
    });

    //forge hammer
    amcexpert.shaped('modern_industrialization:forge_hammer',
      ['BBB',
        ' A ',
        'AAA'],
      { A: 'justdirethings:ferricore_ingot', 
        B: 'justdirethings:ferricore_block' });
    
    //bronze machine casing
    amcexpert.shaped('modern_industrialization:bronze_machine_casing',[
      'BFB',
      'FGF',
      'BFB'],
    {
      B: 'modern_industrialization:bronze_plate',
      F: 'justdirethings:ferricore_ingot',
      G: 'modern_industrialization:bronze_gear'
    })
    
    
    console.log('Modern Industrialization Scripts loaded!');
  })