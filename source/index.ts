import Fastify from 'fastify'

import pkg from '../package.json'

console.log("Version:", pkg.version)

const apiPort = process.env.API_PORT
const debugLog = process.env.DEBUG_LOG
const fastify = Fastify({ logger: debugLog == 'true' })

fastify.get('/', async function handler(request, reply) {
  return { hello: 'world' }
})

fastify.listen({ port: 3000 })
  .then(() => console.log(`api server started on port ${apiPort}`))
  .catch(error => console.error('api server listen error', error))
