import { Context } from "koa"

class ProductController {
  async ping(ctx: Context) {
    ctx.body = {
      message: "OK",
    }
  }
}

export default ProductController
