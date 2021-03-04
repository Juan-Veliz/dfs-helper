const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class ItemStat extends Model{}

ItemStat.init({

    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        min:0
    },
    name: {
        type: DataTypes.STRING,
        allowNull:true
    },
    min:{
        type:DataTypes.NUMBER
    },
    max:{
        type:DataTypes.NUMBER
    }
},
{
    sequelize,
    modelName:'item_stat',
    freezeTableName: true,
    createdAt:false,
    updatedAt: false
})

module.exports = ItemStat;