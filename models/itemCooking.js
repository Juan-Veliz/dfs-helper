const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
const Item = require('./item');
const ItemRecipe = require('./itemRecipe');


class ItemCooking extends Model{}

ItemCooking.init({

    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        min:0
    },
    item_id:{
        type:DataTypes.NUMBER,
        allowNull: false,
        references:{
          type: DataTypes.NUMBER,
          model:Item,
          key:'id'
        }
    }, 
    recipe_id:{
        type:DataTypes.NUMBER,
        allowNull: false,
        references:{
          type: DataTypes.NUMBER,
          model:ItemRecipe,
          key:'id'
        }
    }, 
    name: {
        type: DataTypes.STRING,
        allowNull:true
    }
},
{
    sequelize,
    modelName:'item_class',
    freezeTableName: true,
    createdAt:false,
    updatedAt: false
})

module.exports = ItemCooking;