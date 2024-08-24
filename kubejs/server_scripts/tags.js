const JustHammerForMI = [
    "justhammers:gold_reinforced_hammer",
    "justhammers:diamond_reinforced_hammer",
    "justhammers:netherite_reinforced_hammer",
    "justhammers:iron_reinforced_impact_hammer",
    "justhammers:gold_reinforced_impact_hammer",
    "justhammers:diamond_reinforced_impact_hammer",
    "justhammers:netherite_reinforced_impact_hammer",
    "justhammers:iron_destructor_hammer",
    "justhammers:gold_destructor_hammer",
    "justhammers:diamond_destructor_hammer",
    "justhammers:netherite_destructor_hammer",
    "justhammers:iron_reinforced_hammer",
    "justhammers:netherite_impact_hammer",
    "justhammers:diamond_impact_hammer",
    "justhammers:gold_impact_hammer",
    "justhammers:diamond_hammer",
    "justhammers:netherite_hammer",
    "justhammers:iron_impact_hammer",
    "justhammers:gold_hammer",
    "justhammers:iron_hammer",
    "modern_industrialization:steel_hammer"
  ];

ServerEvents.tags('item', amcexpert => {

    JustHammerForMI.forEach((martelos) => {
        amcexpert.add("modern_industrialization:forge_hammer_tools", martelos);
      });
  })