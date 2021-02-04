
const { DataTypes, Model } = require('sequelize');
const Item = require('./item');
const ItemCategory = require('./itemCategory');

const RelationShips = [

    Item.hasOne(ItemCategory,{
        foreignKey:'id',
        sourceKey:'cat_id'
    }),
    ItemCategory.hasMany(Item,{
        foreignKey:'cat_id',
        sourceKey:'id'
    })]

module.exports = RelationShips;