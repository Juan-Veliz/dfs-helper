
// const Item = require('./item');
// const ItemCategory = require('./itemCategory');
// const ItemClass = require('./itemClass');
// const ItemRecipe = require('./itemRecipe');
// const ItemDamage = require('./itemDamage');
// const ItemCooking = require('./itemCooking');

// class RelationShips {}

// /*
// ** Item x Category
// */
// Item.hasOne(ItemCategory, { foreignKey:'id', sourceKey:'cat_id', as:'category' });
// ItemCategory.hasMany(Item,{ foreignKey:'cat_id', sourceKey:'id', as:'item' });

// /*
// // Item x Recipe x Cooking
// */

// Item.hasOne(ItemRecipe, { foreignKey:'item_id', sourceKey:'id', as:'recipe' });
// // ItemRecipe.belongsTo(Item, { foreignKey:'id', sourceKey:'item_id', as:'recipe' });
// // ItemCooking.belongsTo( Item, { foreignKey:'item_id', sourceKey : 'id' } );
// // ItemCooking.belongsTo( ItemRecipe, { foreignKey:'recipe_id', sourceKey : 'id' } );
// // Item.belongsToMany( ItemRecipe, { through: ItemCooking, foreignKey:'item_id', sourceKey:'id', otherKey : 'recipe_id', as: 'recettes' });
// // console.log(rel)
// ItemRecipe.belongsToMany( Item, { through: ItemCooking, foreignKey:'recipe_id', sourceKey:'id',otherKey: 'item_id', as: 'ingredents' });

// /*
// ** Category x Class
// */
// ItemCategory.hasOne(ItemClass, { foreignKey:'id', sourceKey:'class_id', as:'class' });
// ItemClass.hasMany(ItemCategory, { foreignKey:'class_id', sourceKey:'id', as:'categories' });

// /*
// ** Item x Damage
// */

// Item.hasMany(ItemDamage,{ foreignKey: 'item_id', sourceKey:'id', as:'damage' });



// module.exports = RelationShips;