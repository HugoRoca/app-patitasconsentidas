import Router from "koa-router"
import ProductController from "../controllers/product.controller"

const router = new Router({ prefix: "/products" })
const controller = new ProductController()

router.post("/", controller.create)

export default router
