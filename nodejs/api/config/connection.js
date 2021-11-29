// const Sequelize = require('sequelize');
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.js')[env];


// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], {
//     dialect: 'postgres',
//     logging: false,
//     ...config});
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, {
//     dialect: 'postgres',
//     logging: false,
//     ...config});
// } 
// // ? Solves issue with DB sync.
// // ? Question: What does this do?
// // sequelize.sync({ alter: true }).then((data) => {
// //   console.log(data)
// //   console.log("DB refreshed");
// // });
 
// sequelize.authenticate()
// .then(()=>{
//     console.log('Connection to database establised');
// })
// .catch(err => {
//     console.error(`Unable to connect to database:`);
// });

// module.exports = sequelize;