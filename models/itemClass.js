const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class ItemClass extends Model{}

ItemClass.init({

    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        min:0
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

module.exports = ItemClass;