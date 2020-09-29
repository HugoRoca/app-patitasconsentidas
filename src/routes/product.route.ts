import Router from "koa-router"
import ProductController from "../controllers/product.controller"
import koaBody from "koa-body"

const router = new Router({ prefix: "/products" })
const controller = new ProductController()
const image = koaBody({ multipart: true })

router.post("/", image, controller.create)

export default router
