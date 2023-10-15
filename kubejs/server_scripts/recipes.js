/*
    Autor : R404

*/

ServerEvents.recipes(event => {
  // Removing recipes
  event.remove({ id: 'immersiveengineering:crafting/workbench' })
  event.remove({ id: 'immersiveengineering:crafting/hammer' })
  event.remove({ id: 'immersiveengineering:crafting/ingot_steel_to_nugget_steel' })
  event.remove({ id: 'immersiveengineering:crafting/wirecutter' })
  event.remove({ id: 'cp_tweaks:tools/steel/ingot' })
  event.remove({ id: 'sophisticatedbackpacks:backpack' })
  event.remove({ id: 'bhc:god_apple' })
  event.remove({ id: 'apotheosis:enchanted_golden_apple' })
  event.remove({ id: 'tiab:time_in_a_bottle'})

  // Adding recipes
  event.shaped('immersiveengineering:workbench', [
    '   ',
    'ISS',
    'T F'
  ], {
    I: 'create:precision_mechanism',
    T: 'immersiveengineering:craftingtable',
    S: 'immersiveengineering:slab_treated_wood_horizontal',
    F: 'immersiveengineering:treated_fence'
  })

  event.shaped('immersiveengineering:hammer', [
    ' NF',
    ' SN',
    'S  '
  ], {
    S: 'minecraft:stick',
    N: 'immersiveengineering:nugget_steel',
    F: '#forge:string',
  })

  event.shaped('immersiveengineering:wirecutter', [
    'IS ',
    'S  ',
    '   '
  ], {
    S: 'minecraft:stick',
    I: 'immersiveengineering:ingot_steel'
  })

  event.shaped('minecraft:enchanted_golden_apple', [
    'AB ',
    'CD ',
    '   '
  ], {
    A: 'chemlib:sucrose',
    B: 'chemlib:cellulose',
    C: 'chemlib:cesium_chloride',
    D: 'chemlib:technetium'
  })

  event.shaped('sophisticatedbackpacks:backpack', [
    'ABA',
    'ACA',
    'BBB'
  ], {
    A: '#forge:string',
    B: '#forge:leather',
    C: '#forge:chests'
  })

  event.shaped('tiab:time_in_a_bottle', [
    'AAA',
    'BCB',
    'DED'
  ], {
    A: 'minecraft:gold_ingot',
    B: 'minecraft:diamond',
    C: 'minecraft:clock',
    D: 'minecraft:nether_star',
    E: 'apotheosis:infused_breath'
    
  })

  // Create

  event.recipes.create.mixing([
    '3x immersiveengineering:nugget_steel',
    Item.of('6x immersiveengineering:nugget_steel').withChance(0.1)
  ], [
    Item.of('iron_ingot'),
    Item.of('3x coal')
  ]).heated()

  event.recipes.create.mixing([
    'create:creative_blaze_cake'
  ], [
    Item.of('2x create:blaze_cake'),
    Item.of('upgradednetherite:fire_upgraded_netherite_ingot'),
    Fluid.of('mekanismgenerators:tritium')
  ]).superheated()

  console.log('Hello! The recipe event has fired!')

})