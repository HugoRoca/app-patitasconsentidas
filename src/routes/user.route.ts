import Router from "koa-router"
import UserController from "../controllers/user.controller"

const router = new Router({ prefix: "/users" })
const controller = new UserController()

router.get("/", controller.getAll)

export default router
