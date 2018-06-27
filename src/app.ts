const apm = require('elastic-apm-node').start({
  serviceName: 'elastic-apm-demo-service',
  serverUrl: 'http://es-apm-svc.infra.svc.cluster.local:8200',
  transactionSampleRate: 0.05,
  flushInterval: 1,
  serverTimeout: 10,
  maxQueueSize: 50,
  active: true,
  logLevel: 'debug',
  sourceLinesErrorAppFrames: 0,
  sourceLinesErrorLibraryFrames: 0,
  sourceLinesSpanAppFrames: 0,
  sourceLinesSpanLibraryFrames: 0,
  stackTraceLimitedit: 5,
  transactionMaxSpans: 32,
})

import * as Koa from 'koa'

import routes from './routes'

export default new Koa()
  .use(routes.routes())
  .listen(3000, () => {
    console.log('listening', 3000)
  })
