import { WebSocketServer } from 'ws'
const port = 3222
console.log(`服务运行在http://localhost:${port}/`)
const wss = new WebSocketServer({ port })

wss.on('connection', ws => {
  console.log('[服务器]：客官您来了~里边请')
  ws.send(`[websocket云端]您已经连接云端!数据推送中!`)
  let index = 1
  const interval = setInterval(() => {
    ws.send(`[websocket]数据推送第${index}次`)
    index++
  }, 1000 * 2)

  // ws.on('close', () => {
  //   clearInterval(interval) // 清除定时器
  //   console.log('[服务器]：客官下次再来呢~')
  // })
})
