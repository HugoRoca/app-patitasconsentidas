import ProductRepository from "../repositories/product.repository"
import { Product } from "../models/product.model"

const productRepository = new ProductRepository()

class ProductService {
  async create(body: Product) {
    return await productRepository.create(body)
  }

  async getAll() {
    return await productRepository.getAll()
  }

  async getById(code: string) {
    return await productRepository.getById(code)
  }
}

export default ProductService
