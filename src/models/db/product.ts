/* eslint-disable @typescript-eslint/camelcase */
import { Model, DataTypes } from "sequelize"

class Product extends Model {
  product_code!: string
  name!: string
  description!: string
  image!: string
  type_unit: string
  quantity!: number
  sale_price!: number
  state!: number
}

export default (database: any) => {
  Product.init(
    {
      product_code: { type: DataTypes.STRING },
      name: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING },
      image: { type: DataTypes.STRING },
      type_unit: { type: DataTypes.STRING },
      quantity: { type: DataTypes.NUMBER },
      sale_price: { type: DataTypes.NUMBER },
      buy_price: { type: DataTypes.NUMBER },
      type_pet: { type: DataTypes.STRING },
      category: { type: DataTypes.STRING },
      brand: { type: DataTypes.STRING },
      size: { type: DataTypes.STRING },
      color: { type: DataTypes.STRING },
      type_product: { type: DataTypes.STRING },
      state: { type: DataTypes.NUMBER, defaultValue: true },
      date_created: { type: DataTypes.DATE, defaultValue: new Date() },
      date_last_updated: { type: DataTypes.DATE, defaultValue: new Date() },
    },
    {
      tableName: "Products",
      sequelize: database,
    }
  )

  return Product
}
