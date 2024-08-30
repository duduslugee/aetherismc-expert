//priority 1000
//modern industrialization scripts
const removendoMI = [
  "modern_industrialization:materials/steel/craft/hammer",
  "modern_industrialization:materials/iron/craft/hammer",
  "modern_industrialization:materials/diamond/craft/hammer",
  "modern_industrialization:tools/smithing/netherite_hammer",
  "modern_industrialization:forge_hammer",
  "modern_industrialization:vanilla_recipes/steel_forge_hammer_asbl",
  "modern_industrialization:steam_age/bronze/machine_casing_asbl",
  "modern_industrialization:steam_age/steel/machine_casing_asbl",
  "modern_industrialization:upgrade/craft/steel/mixer",
  "modern_industrialization:upgrade/craft/steel/furnace",
  "extended_industrialization:machines/bending_machine/craft/upgrade_steel",
  "modern_industrialization:upgrade/craft/steel/cutting_machine",
  "modern_industrialization:upgrade/craft/steel/water_pump",
  "extended_industrialization:machines/composter/craft/upgrade_steel",
  "extended_industrialization:machines/waste_collector/craft/upgrade_steel",
  "extended_industrialization:machines/solar_boiler/craft/upgrade_steel",
  "modern_industrialization:upgrade/craft/steel/macerator",
  "modern_industrialization:upgrade/craft/steel/compressor",
  "modern_industrialization:upgrade/craft/steel/boiler"
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
      F: 'justdirethings:ferricore_plate',
      G: 'modern_industrialization:bronze_gear'
    })

    //steel machine casing
    amcexpert.shaped('modern_industrialization:steel_machine_casing',[
      'BBB',
      'BGB',
      'BBB'],
    {
      B: 'modern_industrialization:steel_plate',
      G: 'justdirethings:ferricore_gear'
    })

    
    
    
    console.log('Modern Industrialization Scripts loaded!');
  })