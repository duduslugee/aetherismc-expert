const thingsMI = [
    "blade",
    "bolt",
    "curved_plate",
    "double_ingot",
    "dust",
    "gear",
    "large_plate",
    "nugget",
    "plate",
    "ring",
    "rod",
    "rotor",
    "tiny_dust"
];

const thingsMINome = [
    "Blade",
    "Bolt",
    "Curved Plate",
    "Double Ingot",
    "Dust",
    "Gear",
    "Large Plate",
    "Nugget",
    "Plate",
    "Ring",
    "Rod",
    "Rotor",
    "Tiny Dust"
];

StartupEvents.registry('item', amcexpert => {

    //coisitas de ferricore usando o array thingsMI
    thingsMI.forEach((ferricore, index) => {
        amcexpert.create(`justdirethings:ferricore_${ferricore}`)
        .texture(`amcexpert:item/${ferricore}`)
        .displayName(`Ferricore ${thingsMINome[index]}`)
        .color(0x99ffff);
    });

    //blazegold
    thingsMI.forEach((blazegold, index) => {
        amcexpert.create(`justdirethings:blazegold_${blazegold}`)
        .texture(`amcexpert:item/${blazegold}`)
        .displayName(`Blazegold ${thingsMINome[index]}`)
        .color(0xae5653);
    });

    //eclipse alloy
    thingsMI.forEach((eclipsealloy, index) => {
        amcexpert.create(`justdirethings:eclipsealloy_${eclipsealloy}`)
        .texture(`amcexpert:item/${eclipsealloy}`)
        .displayName(`Eclipse Alloy ${thingsMINome[index]}`)
        .color(0x415764);
    });

  })