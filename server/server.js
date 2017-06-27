const Hapi = require('hapi')
const axios = require('axios')

const server = new Hapi.Server()

const getModule = async (moduleName) => {
  return await axios.get(`https://registry.npmjs.org/${moduleName}`)
}

server.connection({
  host: 'localhost',
  port: 6789
})

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('Valid routes are /{package_name} eg; /express')
  }
})

server.route({
  method: 'GET',
  path: '/{module}',
  handler: async (request, reply) => {
    const query = await getModule('express')
    reply(query.data)
  }
})

server.start((err) => {
  if (err) throw err
  console.log(`Server is running at ${server.info.uri}`)
})