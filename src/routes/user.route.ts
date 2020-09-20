import Router from "koa-router"
import UserController from "../controllers/user.controller"

const router = new Router({ prefix: "/users" })
const controller = new UserController()

router.get("/ping", controller.ping)

export default router
