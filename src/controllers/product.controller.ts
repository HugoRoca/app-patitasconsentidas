/* eslint-disable @typescript-eslint/camelcase */
import { Context } from "koa"
import { Product } from "../models/product.model"
import ProductService from "../services/product.service"

const productService = new ProductService()
import { uploadImg } from "../libs/upload"
import md5 from "blueimp-md5"

class ProductController {
  async create(ctx: Context) {
    const file = ctx.request.files || {}

    let fileName
    let fileNameComplete

    if (Object.keys(file).length) {
      const upload = await uploadImg(file.image)

      if (!upload.success) {
        ctx.throw("Error when upload image")
      }

      fileName = upload.fileName
      fileNameComplete = upload.fileNameComplete
    } else {
      fileName = md5(`${new Date().getTime()}`)
    }

    const productModel: Product = {
      product_code: fileName,
      name: ctx.request.body.name,
      description: ctx.request.body.description,
      image: fileNameComplete,
      type_unit: ctx.request.body.type_unit,
      sale_price: ctx.request.body.sale_price,
      quantity: ctx.request.body.quantity,
      buy_price: ctx.request.body.buy_price,
      type_pet: ctx.request.body.type_pet,
      category: ctx.request.body.category,
      sub_category: ctx.request.body.sub_category,
      brand: ctx.request.body.brand,
      size: ctx.request.body.size,
      color: ctx.request.body.color,
      type_product: ctx.request.body.type_product,
      in_offer: ctx.request.body.in_offer,
    }
    ctx.body = await productService.create(productModel)
  }
}

export default ProductController
