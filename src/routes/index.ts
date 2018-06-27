import * as Router from 'koa-router'
import * as mongoose from 'mongoose'
import { Context } from 'koa'

const MONGO_URL = process.env.MONGO_URL || ''
mongoose.connect(MONGO_URL)
const Schema = mongoose.Schema

const WCPlayersSchema = new Schema({
  username: String,
  user: { type: Schema.Types.ObjectId },
  screenName: String,
  isLoginUser: Boolean,
});
const WCPlayers = mongoose.model('WCPlayers', WCPlayersSchema);

const router = new Router()

async function test(ctx: Context) {
  ctx.body = {
    success: true,
  }
}

async function mongo(ctx: Context) {
  const players = await WCPlayers.find({}).limit(10).exec()
  ctx.body = {
    success: true,
    data: players,
  }
}

router.get('/test', test)
router.get('/mongo', mongo)

export default router
