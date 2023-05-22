'use strict'

const fp = require('fastify-plugin')
const CommandBus = require('@itross/cbus')

async function cbusPlugin (fastify, opts) {
  const instance = opts.instance || 'cbus'

  if (fastify[instance]) {
    throw new Error(`"${instance}" CommandBus instance already registered.`)
  }

  const bus = new CommandBus()
  fastify.decorate(instance, bus)
  fastify.log.debug(`"${instance} CommandBus instance registered."`)
}

module.exports = fp(cbusPlugin, {
  fastify: '>=3',
  name: '@itross/fp-cbus'
})
