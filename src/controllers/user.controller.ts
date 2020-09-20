import { Context } from "koa"

class UserController {
  async ping(ctx: Context) {
    ctx.body = {
      message: "OK",
    }
  }
}

export default UserController
