
const Item = require('./item');
const ItemCategory = require('./itemCategory');
const ItemClass = require('./itemClass');
const ItemRecipe = require('./itemRecipe');
const ItemDamage = require('./itemDamage')

class RelationShips {}


/*
** Item x Category
*/
Item.hasOne(ItemCategory, {
    foreignKey:'id',
    sourceKey:'cat_id',
    as:'category'
  })

ItemCategory.hasMany(Item,{
foreignKey:'cat_id',
sourceKey:'id',
as:'item'
})

/*
// Item x Recipe x Cooking
*/

// Item.belongsTo(ItemRecipe, {
//     foreignKey:'id',
//     sourceKey:'item_id',
//     as:'recipe'
// })

// ItemRecipe.hasOne(Item, {
//     foreignKey:'id',
//     sourceKey:'item_id',
//     as:'ingredientes'
// })

/*
** Category x Class
*/
ItemCategory.hasOne(ItemClass, {
    foreignKey:'id',
    sourceKey:'class_id',
    as:'class'
})

ItemClass.hasMany(ItemCategory, {
    foreignKey:'class_id',
    sourceKey:'id',
    as:'categories'
})

/*
** Item x Damage
*/

Item.hasMany(ItemDamage,{
    foreignKey: 'item_id',
    sourceKey:'id'
})



module.exports = RelationShips;