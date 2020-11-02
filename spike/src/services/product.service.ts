/* eslint-disable @typescript-eslint/camelcase */
import ProductRepository from "../repositories/product.repository"
import StockRepository from "../repositories/stock.repository"
import { Product } from "../models/product.model"
import { Stock } from "../models/stock.model"

const productRepository = new ProductRepository()
const stockRepository = new StockRepository()

class ProductService {
  async create(body: Product) {
    const product = await productRepository.create(body)
    const stockModel: Stock = {
      product_code: body.product_code,
      quantity: body.quantity,
    }

    if (stockModel.quantity > 0) {
      const stock = await stockRepository.create(stockModel)
      return { product, stock }
    }

    return product
  }

  async getByName(name: string) {
    return await productRepository.getByName(name)
  }

  async getAll() {
    return await productRepository.getAll()
  }

  async getById(code: string) {
    return await productRepository.getById(code)
  }
}

export default ProductService
