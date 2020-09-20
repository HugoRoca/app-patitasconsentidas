import { Context } from "koa"
import UserService from "../services/user.services"

const userService = new UserService()

class UserController {
  async getAll(ctx: Context) {
    ctx.body = await userService.getAll()
  }
}

export default UserController
