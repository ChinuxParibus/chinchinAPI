const buildURL = () => `${process.env.MARKET_API_URL}${process.env.MARKET_API_ENDPOINT}?convert=${process.env.MARKET_API_CONVERT}${process.env.MARKET_API_PARAMS}&symbol=${process.env.MARKET_API_COINS}`

const BASE_URL = `/${process.env.API_NAME}/${process.env.API_VERSION}`

const defaultHeaders = () => ({
  'X-CMC_PRO_API_KEY': process.env.MARKET_API_KEY,
  'Accept': 'application/json',
  'Encoding': 'deflate, gzip'
})

module.exports = { buildURL, defaultHeaders, BASE_URL }