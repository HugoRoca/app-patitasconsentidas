/* eslint-disable @typescript-eslint/camelcase */
import { Context } from "koa"
import md5 from "blueimp-md5"
import { Product } from "../models/product.model"
import ProductService from "../services/product.service"

const productService = new ProductService()

class ProductController {
  async create(ctx: Context) {
    const productModel: Product = {
      product_code: md5(`${ctx.request.body.name}.${new Date().getTime()}`),
      name: ctx.request.body.name,
      description: ctx.request.body.description,
      image: ctx.request.body.image,
      type_unit: ctx.request.body.type_unit,
      quantity: ctx.request.body.quantity,
      sale_price: ctx.request.body.sale_price,
    }
    ctx.body = await productService.create(productModel)
  }
}

export default ProductController
