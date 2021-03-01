const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');
const Item = require('./item')
class ItemRecipe extends Model{}

ItemRecipe.init({

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
    name: {
        type: DataTypes.STRING,
        allowNull:true
    }
},
{
    sequelize,
    modelName:'item_recipe',
    freezeTableName: true,
    createdAt:false,
    updatedAt: false
})

module.exports = ItemRecipe;