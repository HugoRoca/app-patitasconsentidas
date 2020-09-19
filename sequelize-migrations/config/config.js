const yenv = require('yenv')
const env = yenv()

module.exports = {
  development: {
    username: env.DATABASE.MYSQL.USERNAME,
    password: env.DATABASE.MYSQL.PASSWORD,
    database: env.DATABASE.MYSQL.DATABASE,
    host: env.DATABASE.MYSQL.HOST,
    dialect: env.DATABASE.MYSQL.DIALECT,
  },
  test: {
    username: env.DATABASE.MYSQL.USERNAME,
    password: env.DATABASE.MYSQL.PASSWORD,
    database: env.DATABASE.MYSQL.DATABASE,
    host: env.DATABASE.MYSQL.HOST,
    dialect: env.DATABASE.MYSQL.DIALECT,
  },
  production: {
    username: env.DATABASE.MYSQL.USERNAME,
    password: env.DATABASE.MYSQL.PASSWORD,
    database: env.DATABASE.MYSQL.DATABASE,
    host: env.DATABASE.MYSQL.HOST,
    dialect: env.DATABASE.MYSQL.DIALECT,
  },
}