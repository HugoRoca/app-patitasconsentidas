import Router from "koa-router"
import compose from "koa-compose"
import multer from "multer"
import ProductController from "../controllers/product.controller"
import { storage, fileFilter } from "../utils/helpers"

const router = new Router({ prefix: "/products" })
const controller = new ProductController()
const upload = multer({ storage, fileFilter }).single("image")

router.post("/", upload, controller.create)

export default router
