//priority 1000
//modern industrialization scripts
const removendoMIJustDireThings = [
    
  ];

const ingots = [
  "ferricore",
  "blazegold",
  "eclipsealloy"
];

const recipeBlades = [
    'justdirethings:ferricore_blade', 
    'justdirethings:blazegold_blade', 
    'justdirethings:eclipse_alloy_blade'
];
  
ServerEvents.recipes(amcexpert => {
  //removendo tudo
  removendoMIJustDireThings.forEach((recipe) => {
    console.log("Removendo Recipe: " + recipe);
    amcexpert.remove({ id: recipe });
  });

  ingots.forEach((custom) => {
    console.log("Adicionando receitas: " + custom);
    //blade recipe
    amcexpert.custom({
      type: "modern_industrialization:packer",
      eu: 2,
      duration: 100,
      item_inputs: [
        {
          amount: 2,
          item: `justdirethings:`+custom+`_curved_plate`,
        },
        {
          amount: 1,
          item: `justdirethings:`+custom+`_rod`
        }
      ],
      item_outputs: [
        {
          amount: 1,
          item: `justdirethings:`+custom+`_blade`,
        },
      ],
      }).id(`amcexpert:`+custom+`_blade_recipe_packer`);

    //bolt recipe
    amcexpert.custom({
      type: "modern_industrialization:cutting_machine",
      duration: 100,
      eu: 2,
      fluid_inputs: [
        {
          amount: 1,
          fluid: "modern_industrialization:lubricant"
        }
      ],
      item_inputs: [
        {
          amount: 1,
          item: "justdirethings:"+custom+"_rod"
        }
      ],
      item_outputs: [
        {
          amount: 2,
          item: "justdirethings:"+custom+"_bolt"
        }
      ]
    }).id(`amcexpert:`+custom+`_bolt_recipe_cuttingmachine`);

    //curved plating
    amcexpert.custom({
      type: "modern_industrialization:compressor",
      duration: 100,
      eu: 2,
      item_inputs: [
        {
          amount: 1,
          item: "justdirethings:"+custom+"_plate"
        }
      ],
      item_outputs: [
        {
          amount: 1,
          item: "justdirethings:"+custom+"_curved_plate"
        }
      ]
    }).id(`amcexpert:`+custom+`_curved_plating_compressor`);

    //plate

    amcexpert.custom({
      type: "extended_industrialization:bending_machine",
      duration: 100,
      eu: 2,
      item_inputs: [
        {
          amount: 1,
          item: "justdirethings:"+custom+"_ingot"
        }
      ],
      item_outputs: [
        {
          amount: 1,
          item: "justdirethings:"+custom+"_plate"
        }
      ]
    }).id(`amcexpert:`+custom+`_plate_bending_machine`);

    amcexpert.custom({
      type: "modern_industrialization:compressor",
      duration: 200,
      eu: 2,
      item_inputs: [
        {
          amount: 1,
          item: "justdirethings:"+custom+"_ingot"
        }
      ],
      item_outputs: [
        {
          amount: 1,
          item: "justdirethings:"+custom+"_plate"
        }
      ]
    }).id(`amcexpert:`+custom+`_plate_compressor`);

    //double ingot
    amcexpert.custom({
      type: "modern_industrialization:packer",
      duration: 100,
      eu: 2,
      item_inputs: [
        {
          amount: 2,
          item: "justdirethings:"+custom+"_ingot"
        },
        {
          amount: 1,
          item: "modern_industrialization:packer_double_ingot_template",
          probability: 0.0
        }
      ],
      item_outputs: [
        {
          amount: 1,
          item: "justdirethings:"+custom+"_double_ingot"
        }
      ]
    }).id(`amcexpert:`+custom+`_double_ingot_packer`);

    //rod
    amcexpert.custom({
      type: "modern_industrialization:cutting_machine",
      duration: 100,
      eu: 2,
      fluid_inputs: [
        {
          amount: 1,
          fluid: "modern_industrialization:lubricant"
        }
      ],
      item_inputs: [
        {
          amount: 1,
          item: "justdirethings:"+custom+"_ingot"
        }
      ],
      item_outputs: [
        {
          amount: 2,
          item: "justdirethings:"+custom+"_rod"
        }
      ]
    }).id(`amcexpert:`+custom+`_rod_recipe_cuttingmachine`);

    amcexpert.custom({
      type: "modern_industrialization:cutting_machine",
      duration: 100,
      eu: 2,
      fluid_inputs: [
        {
          amount: 1,
          fluid: "modern_industrialization:lubricant"
        }
      ],
      item_inputs: [
        {
          amount: 1,
          item: "justdirethings:"+custom+"_double_ingot"
        }
      ],
      item_outputs: [
        {
          amount: 4,
          item: "justdirethings:"+custom+"_rod"
        }
      ]
    }).id(`amcexpert:`+custom+`_rod_recipe_doubleingot_cuttingmachine`);

    //ring
    amcexpert.custom({
      type: "extended_industrialization:bending_machine",
      duration: 100,
      eu: 2,
      item_inputs: [
        {
          amount: 1,
          item: "justdirethings:"+custom+"_rod"
        }
      ],
      item_outputs: [
        {
          amount: 1,
          item: "justdirethings:"+custom+"_ring"
        }
      ]
    }).id(`amcexpert:`+custom+`_ring_bending_machine`);

    amcexpert.custom({
      type: "modern_industrialization:compressor",
      duration: 200,
      eu: 2,
      item_inputs: [
        {
          amount: 1,
          item: "justdirethings:"+custom+"_rod"
        }
      ],
      item_outputs: [
        {
          amount: 1,
          item: "justdirethings:"+custom+"_ring"
        }
      ]
    }).id(`amcexpert:`+custom+`_ring_compressor`);

    //nugget
    amcexpert.shapeless(
      Item.of(`justdirethings:`+custom+`_nugget`, 9),
      [
        'justdirethings:'+custom+'_ingot'
      ]
    ).id(`amcexpert:`+custom+`_nugget_crafting_shapeless`);

    amcexpert.custom({
      type: "modern_industrialization:unpacker",
      duration: 100,
      eu: 2,
      item_inputs: [
        {
          amount: 1,
          item: "justdirethings:"+custom+"_ingot"
        }
      ],
      item_outputs: [
        {
          amount: 9,
          item: "justdirethings:"+custom+"_nugget"
        }
      ]
    }).id(`amcexpert:`+custom+`_nugget_unpacker`);

    //large plate
    amcexpert.shapeless(
      `justdirethings:`+custom+`_large_plate`,
      [
        'justdirethings:'+custom+'_plate',
        'justdirethings:'+custom+'_plate',
        'justdirethings:'+custom+'_plate',
        'justdirethings:'+custom+'_plate'
      ]
    ).id(`amcexpert:`+custom+`_large_plate_shapeless`);

    amcexpert.custom({
      type: "modern_industrialization:packer",
      eu: 2,
      duration: 100,
      item_inputs: [
        {
          amount: 4,
          item: `justdirethings:`+custom+`_plate`
        }
      ],
      item_outputs: [
        {
          amount: 1,
          item: `justdirethings:`+custom+`_large_plate`,
        },
      ],
      }).id(`amcexpert:`+custom+`_large_plate_packer`);

    //gear
    amcexpert.custom({
      type: "modern_industrialization:assembler",
      duration: 100,
      eu: 2,
      fluid_inputs: [
        {
          amount: 100,
          fluid: "modern_industrialization:soldering_alloy"
        }
      ],
      item_inputs: [
        {
          amount: 4,
          item: "justdirethings:"+custom+"_plate"
        },
        {
          amount: 1,
          item: "justdirethings:"+custom+"_ring"
        }
      ],
      item_outputs: [
        {
          amount: 2,
          item: "justdirethings:"+custom+"_gear"
        }
      ]
    }).id("amcexpert:"+custom+"_gear_assembler")

    amcexpert.shaped(`justdirethings:${custom}_gear`,
      [
          'RBR',
          'BNB',
          'RBR'
      ],
      {
          R: `justdirethings:${custom}_plate`,
          B: `justdirethings:${custom}_bolt`,
          N: `justdirethings:${custom}_ring`
      }
    ).id(`amcexpert:${custom}_gear_shaped`);
  
    //rotor
    amcexpert.custom({
      type: "modern_industrialization:assembler",
      duration: 100,
      eu: 2,
      fluid_inputs: [
        {
          amount: 100,
          fluid: "modern_industrialization:soldering_alloy"
        }
      ],
      item_inputs: [
        {
          amount: 4,
          item: "justdirethings:"+custom+"_blade"
        },
        {
          amount: 1,
          item: "justdirethings:"+custom+"_ring"
        }
      ],
      item_outputs: [
        {
          amount: 1,
          item: "justdirethings:"+custom+"_rotor"
        }
      ]
    }).id("amcexpert:"+custom+"_rotor_assembler")

    amcexpert.shaped(`justdirethings:${custom}_rotor`,
      [
          'BAB',
          'ANA',
          'BAB'
      ],
      {
          A: `justdirethings:${custom}_blade`,
          B: `justdirethings:${custom}_bolt`,
          N: `justdirethings:${custom}_ring`
      }
    ).id(`amcexpert:${custom}_rotor_shaped`);

    //tiny dust
    amcexpert.shapeless(
      Item.of(`justdirethings:`+custom+`_tiny_dust`, 9),
      [
        'justdirethings:'+custom+'_dust'
      ]
    ).id(`amcexpert:`+custom+`_dust_crafting_shapeless`);

    amcexpert.custom({
      type: "modern_industrialization:unpacker",
      duration: 100,
      eu: 2,
      item_inputs: [
        {
          amount: 1,
          item: "justdirethings:"+custom+"_dust"
        }
      ],
      item_outputs: [
        {
          amount: 9,
          item: "justdirethings:"+custom+"_tiny_dust"
        }
      ]
    }).id(`amcexpert:`+custom+`_tiny_dust_unpacker`);

    //dust
    amcexpert.shaped(`justdirethings:`+custom+`_dust`,
      [
        'AAA',
        'AAA',
        'AAA'
      ],
      {
        A: `justdirethings:${custom}_tiny_dust`
      }).id(`amcexpert:`+custom+`_dust_shaped`);

    amcexpert.custom({
      type: "modern_industrialization:packer",
      eu: 2,
      duration: 100,
      item_inputs: [
        {
          amount: 9,
          item: `justdirethings:`+custom+`_tiny_dust`
        }
      ],
      item_outputs: [
        {
          amount: 1,
          item: `justdirethings:`+custom+`_dust`,
        },
      ],
      }).id(`amcexpert:`+custom+`_dust_packer`);

      //dust pelo macerator/crusher/etc
      amcexpert.custom({
        type: "modern_industrialization:macerator",
        duration: 100,
        eu: 2,
        item_inputs: [
          {
            amount: 1,
            item: "justdirethings:"+custom+"_ingot"
          }
        ],
        item_outputs: [
          {
            amount: 1,
            item: "justdirethings:"+custom+"_dust"
          }
        ]
      }).id(`amcexpert:`+custom+`_dust_from_ingot_macerator`)

      amcexpert.custom({
        "type": "mekanism:crushing",
        "input":
        {
          "count": 1,
          "item": "justdirethings"+custom+"_ingot"
        },
        "output":
        {
          "count": 1,
          "id": "justdirethings"+custom+"_dust"
        }
      }).id(`amcexpert:`+custom+`_dust_from_ingot_crusher`)

      

  })      

  //ferricore plate
  amcexpert.custom({
    type: "modern_industrialization:forge_hammer",
    count: 2,
    ingredient: {
      item: "justdirethings:ferricore_ingot"
    },
    result: {
      count: 1,
      id: "justdirethings:ferricore_plate"
    }
  })
  amcexpert.custom({
    type: "modern_industrialization:forge_hammer",
    damage: 20,
    ingredient: {
      item: "justdirethings:ferricore_ingot"
    },
    result: {
      count: 1,
      id: "justdirethings:ferricore_plate"
    }
  })


      console.log('Modern Industrialization Scripts loaded!');
    })