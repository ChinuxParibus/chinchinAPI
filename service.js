const axios = require('axios')
const file = require('fs')
const Utils = require('./utils')

const url = Utils.buildURL()
const headers = Utils.defaultHeaders()
const PTR = {
  "id": null,
  "name": "Petro",
  "symbol": "PTR",
  "slug": "petro",
  "max_supply": 100000000,
  "circulating_supply": 0,
  "is_active": 1,
  "last_updated": new Date(),
  "quote": {
    "USD": {
      "price": 60,
      "volume_24h": 0,
      "percent_change_1h": 0,
      "percent_change_24h": 0,
      "percent_change_7d": 0,
      "market_cap": 0,
      "last_updated": null
    }
  }
}
const VES = {
  "id": null,
  "name": "Bolívar Soberano",
  "symbol": "VES",
  "slug": "soberano",
  "max_supply": null,
  "circulating_supply": 0,
  "is_active": 0,
  "last_updated": new Date(),
  "quote": {
    "USD": {
      "price": 0.00001,
      "volume_24h": 0,
      "percent_change_1h": 0,
      "percent_change_24h": 0,
      "percent_change_7d": 0,
      "market_cap": 100000,
      "last_updated": null
    }
  }
}

const writeJSON = async () => {
  try {
    const response = await axios({ url, headers })
    const market = response.data
    market.data['PTR'] = PTR
    market.data['VES'] = VES
    file.writeFile(
      `${process.env.API_DB_FILENAME}`,
      JSON.stringify(market),
      'utf8',
      (err) => {
        if (err) return false
        return true
      }
    )
  } catch (err) {
    return err
  }
}

const convertCurrencyFrom = (amount, currency) => {
  const currencies = ['BTC', 'ETH', 'USD', 'VES', 'EUR', 'DASH', 'PTR']
  if (!currencies.includes(currency)) {
    return null
  }

  try {
    const currencyList = require(`./${process.env.API_DB_FILENAME}`)
    const conversionTableToUSD =
    Object.entries(currencyList.data)
    .map((entry) => {
      return {
        currency: entry[0],
        priceInUSD: entry[1].quote['USD'].price
      }
    })

    const convertible = conversionTableToUSD.filter(
      item => item.currency === ((currency === 'EUR') ? 'EURS' : currency))[0]

    return conversionTableToUSD.map((entry) => {
      return {
        currency: entry.currency,
        conversionRate: (amount * convertible.priceInUSD) / entry.priceInUSD
      }
    })

  } catch(err) {
    return err
  }
}

module.exports = { writeJSON, convertCurrencyFrom }