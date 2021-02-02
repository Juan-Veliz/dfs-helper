const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
// const ItemCategory = require('./itemCategory');
// const { belongsTo } = require('./itemCategory');

class Item extends Model {}

Item.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement:true,
    min:0
  },
  cat_id: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  name:{
      type: DataTypes.STRING
  },
  level:{
      type:DataTypes.NUMBER
  },
  description:{
      type:DataTypes.TEXT
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'item', // We need to choose the model name
  freezeTableName: true,
  createdAt:false,
  updatedAt: false,
});

// sequelize.Item.belongsTo(ItemCategory, {
//   foreignKey:'cat_id'
// })

// );

module.exports = Item;