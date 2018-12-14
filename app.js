const Koa = require('koa')
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')
const onerror = require('koa-onerror')
const logger = require('koa-logger')

const router = require('./app/routes')
const app = new Koa()
// error handler
onerror(app)

// middlewares
app.use(logger())
app.use(bodyparser())
app.use(json())
app.use(router.routes()).use(router.allowedMethods())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 7998

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})
