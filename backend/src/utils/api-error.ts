import { Context } from "koa";
import ResponseError from "./response-error";
import LogManager from "./log-manager";

const logger = new LogManager();

export default async (ctx: Context, next: () => Promise<any>) => {
  try {
    await next();
    if (!ctx.body && (!ctx.status || ctx.status === 404)) {
      return ResponseError.notFound(ctx);
    }
  } catch (err) {
    const { id = 0, country = "CC" } = ctx.state.application || {};
    const request = ctx.request.body || {};
    logger.logError(
      err.class || "",
      err.method || "",
      request,
      err.message,
      country,
      err.exception,
      err.code_transaction || "",
      id
    );
    return ResponseError.internalServerError(ctx, err);
  }
};
