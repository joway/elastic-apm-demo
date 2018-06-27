import * as Router from 'koa-router'
import { Context } from 'koa'

const router = new Router()

async function test(ctx: Context) {
  ctx.body = {
    success: true,
  }
}

router.get('/test', test)
export default router
