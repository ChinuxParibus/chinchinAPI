require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
//const BASE_URL = require('./utils').BASE_URL
//const writeJSON = require('./service').writeJSON
//const convertCurrencyFrom = require('./service').convertCurrencyFrom
const PORT = process.env.PORT

const app = express()

app.use(bodyParser.json())

//setTimeout(() => {
//  writeJSON()
//}, process.env.MARKET_API_TICK * 30 * 60 * 1000) // every half hour

/**
 * GET /
 * Get price API
 */
app.get(`/`, (req, res, next) => {
  res.send({ price: Math.round((Math.random() * 66000) + 65000) })
})

/**
 * GET /chinchinapi/v1/currencies
 * Get all registered currency market (Currently: BTC, DASH, ETH, EUR)
 
app.get(`${BASE_URL}/currencies`, async (req, res, next) => {
  try {
    const currencyList = require(`./${process.env.API_DB_FILENAME}`)
    res.send(currencyList)
  } catch (err) {
    res.send({ 'Error': err })
  }
})

/**
 * GET /chinchinapi/v1/convert/
 * Fallback URL in case of invalid parameters
 
app.get(`${BASE_URL}/convert/`, (req, res, next) => {
  res.send({'status': 400, 'message': '"amount" and "currency" params are mandatory'})
})

/**
 * GET /chinchinapi/v1/convert/:amount/:currency
 * Converts the :amount of the :currency specified to all registered currencies
 
app.get(`${BASE_URL}/convert/:amount/:currency`, (req, res, next) => {
  try {
    const conversions = convertCurrencyFrom(
      req.params.amount,
      req.params.currency
    )
    res.send(conversions)
  } catch (err) {
    res.send({ 'Error': err })
  }
})
*/

app.listen(PORT, () => {
  console.log(`App (re)started on port ${PORT}`)
})
