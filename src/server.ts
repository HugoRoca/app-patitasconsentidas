import Koa from "koa"
import helmet from "koa-helmet"
import bodyParser from "koa-bodyparser"
import yenv from "yenv"
import log from "fancy-log"
import csp from "./utils/csp"
import compress from "./utils/compress"
import notFavicon from "./utils/api-not-favicon"
import apiError from "./utils/api-error"
import routes from "./routes"
import path from "path"
import koaStatic from "koa-static"

const env = yenv()
const PORT = env.PORT
const server = new Koa()
const folderPublic = koaStatic(path.resolve(__dirname, "../public"))

server
  .use(helmet.contentSecurityPolicy(csp))
  .use(compress)
  .use(bodyParser())
  .use(notFavicon)
  .use(apiError)

server.use(folderPublic)

routes.map((x) => {
  server.use(x.routes()).use(x.allowedMethods())
})

server.listen(PORT, "0.0.0.0", () =>
  log.info(`server is running on PORT ${PORT}`)
)

export default server
