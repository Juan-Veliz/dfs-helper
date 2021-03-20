const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
const ItemCategory = require('./itemCategory');

class Item extends Model {}

Item.init({
  // const Item = sequelize.define('item' ,{
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement:true,
    min:0
  },
  cat_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    references:{
      type: DataTypes.NUMBER,
      model:ItemCategory,
      key:'id'
    }
  },
  name:{
      type: DataTypes.STRING
  },
  level:{
      type:DataTypes.NUMBER
  },
  description:{
      type:DataTypes.TEXT
  },
  created:{
    type: DataTypes.TIME
  },
  modified:{
    type: DataTypes.TIME
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'item', // We need to choose the model name
  freezeTableName: true,
  createdAt:'created',
  updatedAt: 'modified',
});

Item.associate = (models)=>{
  Item.hasOne(ItemCategory, { foreignKey:'id', sourceKey:'cat_id', as:'category' });
}


module.exports = Item;