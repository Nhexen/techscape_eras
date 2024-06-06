import mods.mekanism.api.ingredient.ItemStackIngredient;

/*
Snippets template

<recipetype:mekanism:crushing>.removeRecipe("recipe_name");
<recipetype:mekanism:crushing>.addRecipe(name as string, input as ItemStackIngredient, output as IItemStack)
*/

<recipetype:mekanism:crushing>.addRecipe("crush_bricks", ItemStackIngredient.from(<item:minecraft:bricks>), <item:minecraft:brick> * 4);
//An alternate implementation of the above recipe are shown commented below. This implementation makes use of implicit casting to allow easier calling:
// <recipetype:mekanism:crushing>.addRecipe("crush_bricks", <item:minecraft:bricks>, <item:minecraft:brick> * 4);

// Adds a Crushing Recipe to crush Torch into Stick and Coal.
<recipetype:mekanism:crushing>.addRecipe("crush_torch", ItemStackIngredient.from(<item:minecraft:torch>), <item:minecraft:stick> + <item:minecraft:coal>);