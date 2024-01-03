
# Square exchange rate API

Get real-time exchange rate for the Algerian Dinar in common square currencies.




## Screenshots

![App Screenshot](https://codz.dev/projects/square.png)


## API Reference

#### Get available currencies

```http
  GET https//square.codz.dev/api/currencies
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Convert currency in real-time

```http
  GET https//square.codz.dev/api/convert
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `from` | `string` | **Required**. Currency ISO code (from currencies) |
| `type` | `string` | **Required**. "sell" or "buy" |
| `amount` | `float` | The amount you want to convert |


- You can perform API calls via POST requests too.


## Installation

For JavaScript, install square-codz with npm

```bash
  npm install square-codz
```

Then import it 

```javascript
const squareConverter = require('square-codz');
const apiKey = 'YOUR_API_KEY';
squareConverter.convertCurrency(apiKey, 100, 'EUR', 'buy')
    .then(result => {
        console.log('Test convertCurrency - Success:', result);
    })
    .catch(error => {
        console.error('Test convertCurrency - Error:', error.message);
    });

// Test de la fonction getCurrencies
squareConverter.getCurrencies(apiKey)
    .then(currencies => {
        console.log('Test getCurrencies - Success:', currencies);
    })
    .catch(error => {
        console.error('Test getCurrencies - Error:', error.message);
    });
```



## For other languages

You can simply perform GET/POST calls to the endpoint
__https://square.codz.dev/api/__

Example in python : 

```python
  import requests

# URL of the endpoint
url = 'https://square.codz.dev/api/convert'

# Request data
data = {
    'api_key': 'YOUR_API_KEY',
    'amount': 100,
    'from': 'EUR',
    'price': 'buy'  # or 'sell'
}

try:
    # Perform the POST request
    response = requests.post(url, params=data)

    # Check the response status
    if response.status_code == 200:
        # Display the server response
        print('Server response:', response.json())
    else:
        # Display the error if the request failed
        print('Request failed. Error code:', response.status_code)

except Exception as e:
    # Display an error if the request encounters an exception
    print('Error during the request:', str(e))

```


## Response

__Currencies__ : You will get an array of currencies ISO codes

```json
  {
  "currencies":
  ["EUR","USD","GBP","CAD","CHF","TRY","CNY","EAD","MAD","TND","SAR"],
  "success":true
  }
```


__Convert__ : 

```json
  {
  "amount":12,
  "currency":"EUR",
  "rate":"237.00",
  "result":"2844.00",
  "success":true
  }
```


## FAQ

#### How to get an API key

From the website https://codz.dev

#### Are requests limited ?

No, purchasing a monthly-cost API key will give you an unlimited access
