const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
const Item = require('./item');

class ItemCategory extends Model {}

ItemCategory.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement:true,
    min:0
  },
  class_id: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  name:{
      type: DataTypes.STRING
  }
}, { 
  // Other model options go here
  sequelize, // We need to pass the neconction instance
  modelName: 'item_category',// We need to choose the model name
  freezeTableName: true,
  createdAt:false,
  updatedAt: false
});

// ItemCategory.hasMany(Item,{ foreignKey:'cat_id', sourceKey:'id', as:'item' });


module.exports = ItemCategory;