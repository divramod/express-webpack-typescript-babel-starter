'use strict'

require('@babel/core')
require('@babel/polyfill')

const Binance = require('binance-api-node').default

const client = Binance()
client.time().then((time: any) => {
    console.log(time)
})
