import Router from "koa-router"
import ProductController from "../controllers/product.controller"
import koaBody from "koa-body"

const router = new Router({ prefix: "/products" })
const controller = new ProductController()

const image = koaBody({
  formLimit: "1mb",
  multipart: true,
  formidable: {
    maxFileSize: 200 * 1024 * 1024,
    keepExtensions: true,
  },
})

router.post("/", image, controller.create)

export default router
