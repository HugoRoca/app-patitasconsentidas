import { Sequelize } from "sequelize"
import product from "./product"
import user from "./user"
import stock from "./stock"
import yenv from "yenv"
const env = yenv()

let sequelize: any

if (process.env.NODE_ENV === "production") {
  sequelize = new Sequelize(
    env.DATABASE.MYSQL.DATABASE,
    env.DATABASE.MYSQL.USERNAME,
    env.DATABASE.MYSQL.PASSWORD,
    {
      host: env.DATABASE.MYSQL.HOST,
      port: env.DATABASE.MYSQL.PORT,
      dialect: env.DATABASE.MYSQL.DIALECT,
      dialectOptions: {
        ssl: true,
        native: true,
      },
      logging: true,
      define: {
        createdAt: "date_created",
        updatedAt: "date_last_updated",
      },
    }
  )
} else {
  sequelize = new Sequelize(
    env.DATABASE.MYSQL.DATABASE,
    env.DATABASE.MYSQL.USERNAME,
    env.DATABASE.MYSQL.PASSWORD,
    {
      host: env.DATABASE.MYSQL.HOST,
      dialect: env.DATABASE.MYSQL.DIALECT,
      logging: true,
      define: {
        createdAt: "date_created",
        updatedAt: "date_last_updated",
      },
    }
  )
}

export default {
  Product: product(sequelize),
  User: user(sequelize),
  Stock: stock(sequelize),
}
