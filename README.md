![alt text](chin-logo.jpg "Logo")

# Chinchin API

This is an Example API with requested requirements.

## Notes

+ Due to limitations of [CoinMarketCap API](https://coinmarketcap.com/api/documentation/v1), every hour, the data will be updated.
+ All requests have base url: `/chinchinapi/v1/`
+ .env file are shared in this project but just for personal use, do not distribute.

## API

| URL | params | description |
|---|---|---|
| `/` | N/A | Get information about the API |
| `/currencies` | N/A | Get all registered currency market (Currently: BTC, DASH, ETH, EUR) |
| `/convert/:amount/:currency` | <ul><li><code>amount</code>: Amount to convert. Type **number**</li><li><code>currency</code>: Denomination of the currency. Type **string**. Must be one of the list: 'BTC', 'ETH', 'USD', 'VES', 'EUR', 'DASH', 'PTR'. Is case sensitive.</li></ul>
