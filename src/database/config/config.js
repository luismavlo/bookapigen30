const {envs} = require("../../config/enviroments/enviroments");

module.exports = {
  development: {
    username: envs.DB_USERNAME,
    password: envs.DB_PASSWORD,
    database: envs.DB_DATABASE,
    host: envs.DB_HOST,
    dialect: 'postgres',
    port: envs.DB_PORT,
    logging: true
  },
}
