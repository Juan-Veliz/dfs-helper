const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class DamageType extends Model{}

DamageType.init({

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
    modelName:'damage_type',
    freezeTableName: true,
    createdAt:false,
    updatedAt: false
})

module.exports = DamageType;