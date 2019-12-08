const http = require("http")
const {exec} =require("child_process")
const Router = require('koa-router')
const router = new Router()
const Koa = require("koa")
const app = new Koa({proxy:true})
app.porxy = true
app.use(async (ctx,next) =>{
  console.time()
  await next()
  console.timeEnd()
} )
app.use(router.routes()).use(router.allowedMethods())
router.get("/wxrc-docs",async (ctx,next)=>{
  await exec("/bin/sh bat.js",(error,stdout,stderr)=>{
    if(error){
      console.error(`执行的错误：${error}`)
      return
    }
    console.log(`execute shell的stdout:${stdout}`)
    console.error(`execute shell的stderr:${stderr}`)
  })
  next()
  ctx.body = 'exec complete'
})



// app.listen = 3000
http.createServer(app.callback()).listen(3000).on('listening', function () {
  console.log(`服务已开启，端口：3000`)
})



