/* eslint-disable @typescript-eslint/camelcase */
import { Model, DataTypes } from "sequelize"

class Stock extends Model {
  product_code!: string
  quantity!: number
}

export default (database: any) => {
  Stock.init(
    {
      product_code: { type: DataTypes.STRING },
      quantity: { type: DataTypes.NUMBER },
    },
    {
      tableName: "Stocks",
      sequelize: database,
    }
  )

  return Stock
}
