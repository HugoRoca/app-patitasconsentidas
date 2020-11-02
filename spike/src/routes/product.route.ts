import Router from "koa-router"
import ProductController from "../controllers/product.controller"
import koaBody from "koa-body"
import productSchema from "../schemas/product.schema"
import schemaValidator from "../utils/schema-validator"

const router = new Router({ prefix: "/products" })
const controller = new ProductController()
const createProductValidate = schemaValidator({
  body: productSchema.CREATE_APPLICATION_BODY,
})

const image = koaBody({
  formLimit: "1mb",
  multipart: true,
  formidable: {
    maxFileSize: 200 * 1024 * 1024,
    keepExtensions: true,
  },
})

router.post("/", image, createProductValidate, controller.create)

export default router
