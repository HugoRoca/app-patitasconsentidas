/* eslint-disable @typescript-eslint/camelcase */
import db from "../models/db"
import { Product } from "../models/product.model"

class ProductRepository {
  async create(body: Product) {
    return await db.Product.create<any>(body)
  }

  async getAll() {
    return await db.Product.findAll<any>()
  }

  async getById(code: string) {
    return await db.Product.findOne<any>({ where: { product_code: code } })
  }

  async getByName(name: string) {
    return await db.Product.findOne<any>({ where: { name } })
  }
}

export default ProductRepository
