const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://juano:Juano1392_@localhost:3306/dofus') // Example for postgres

module.exports = sequelize;

// (async ()=>{
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// })();