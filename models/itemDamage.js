const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
const Item = require('./item');
const DamageProperty = require('./damageProperty');
const DamageType = require('./dagameType');

class ItemDamage extends Model {}

ItemDamage.init({
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement:true,
    min:0
  },
  item_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    references:{
      type: DataTypes.NUMBER,
      model:Item,
      key:'id'
    }
  },
  prop_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    references:{
      type: DataTypes.NUMBER,
      model:DamageProperty,
      key:'id'
    }
  },
  type_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    references:{
      type: DataTypes.NUMBER,
      model:DamageType,
      key:'id'
    }
  },
  min:{
    type: DataTypes.NUMBER,
    allowNull: true
  },
  max:{
    type: DataTypes.NUMBER,
    allowNull: true
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
  modelName: 'item_damage', // We need to choose the model name
  freezeTableName: true,
  createdAt:'created',
  updatedAt: 'modified',
});

module.exports = ItemDamage;