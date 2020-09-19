import Router from "koa-router"
import ProductController from "../controllers/product.controller"

const router = new Router()
const controller = new ProductController()

router.get("/ping", controller.ping)

export default router
