'use strict'

const { Bench } = require('tinybench')

async function main () {
  const bench = new Bench({ time: 3_000 })

  const obj0 = buildObjectWithUndefinedProp(0)
  const obj1 = buildObjectWithUndefinedProp(1)
  const obj10 = buildObjectWithUndefinedProp(10)
  const obj100 = buildObjectWithUndefinedProp(100)

  bench
    .add('0 props', () => { JSON.stringify(obj0) })
    .add('1 prop', () => { JSON.stringify(obj1) })
    .add('10 props', () => { JSON.stringify(obj10) })
    .add('100 props', () => { JSON.stringify(obj100) })

  await bench.run()

  console.table(bench.table())
}

main()

function buildObjectWithUndefinedProp (howManyProps) {
  const obj = Object.create(null)
  for (let i = 0; i < howManyProps; i++) {
    obj[`prop${i}`] = undefined
  }
  return obj
}
