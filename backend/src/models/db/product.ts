/* eslint-disable @typescript-eslint/camelcase */
import { Model, DataTypes } from "sequelize";

class Product extends Model {
  product_code!: string;
  name!: string;
  description!: string;
  image!: string;
  type_unit: string;
  quantity!: number;
  sale_price!: number;
  state!: number;
}

export default (database: any) => {
  Product.init(
    {
      product_code: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      type_unit: {
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.NUMBER,
      },
      sale_price: {
        type: DataTypes.NUMBER,
      },
      state: {
        type: DataTypes.NUMBER,
      },
      date_created: {
        type: DataTypes.DATE,
      },
      date_last_updated: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "Products",
      sequelize: database,
    }
  );
};
