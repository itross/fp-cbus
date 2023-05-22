'use strict'

const { test } = require('tap')
const build = require('./build.js')
const cbusPlugin = require('..')

test('Should register a cbus instance as "cbus"', async (t) => {
  t.plan(1)
  const app = await build(t)
  await app.register(cbusPlugin)
  t.ok(app.cbus)
})

test('Should register a cbus instance as "myBus"', async (t) => {
  t.plan(1)
  const app = await build(t)
  await app.register(cbusPlugin, { instance: 'myBus' })
  t.ok(app.myBus)
})

test('Should throw registering the same bus instance', async (t) => {
  t.plan(1)
  const app = await build(t)
  await app.register(cbusPlugin, { instance: 'myBus' })
  t.rejects(app.register(cbusPlugin, { instance: 'myBus' }))
})
