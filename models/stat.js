const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class Stat extends Model{}

Stat.init({

    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        min:0
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    }
},
{
    sequelize,
    modelName:'stat',
    freezeTableName: true,
    createdAt:false,
    updatedAt: false
})

module.exports = Stat;