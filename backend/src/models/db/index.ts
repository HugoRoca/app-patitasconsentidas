import { Sequelize } from "sequelize";
import product from "./product";
import yenv from "yenv";
const env = yenv();

let sequelize: any;

if (process.env.NODE_ENV === "production") {
  sequelize = new Sequelize(
    env.DATABASE.POSTGRES.DATABASE,
    env.DATABASE.POSTGRES.USERNAME,
    env.DATABASE.POSTGRES.PASSWORD,
    {
      host: env.DATABASE.POSTGRES.HOST,
      port: env.DATABASE.POSTGRES.PORT,
      dialect: env.DATABASE.POSTGRES.DIALECT,
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
  );
} else {
  sequelize = new Sequelize(
    env.DATABASE.POSTGRES.DATABASE,
    env.DATABASE.POSTGRES.USERNAME,
    env.DATABASE.POSTGRES.PASSWORD,
    {
      host: env.DATABASE.POSTGRES.HOST,
      dialect: env.DATABASE.POSTGRES.DIALECT,
      logging: true,
      define: {
        createdAt: "date_created",
        updatedAt: "date_last_updated",
      },
    }
  );
}

export default {
  Product: product(sequelize),
};
