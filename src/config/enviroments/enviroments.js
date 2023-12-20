require('dotenv').config();
const env = require('env-var');


const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    DB_USERNAME: env.get('DB_USERNAME').required().asString(),
    DB_PASSWORD: env.get('DB_PASSWORD').required().asString(),
    DB_DATABASE: env.get('DB_DATABASE').required().asString(),
    DB_PORT: env.get('DB_PORT').required().asPortNumber(),
    DB_HOST: env.get('DB_HOST').required().asString(),
}

module.exports = {
    envs
}