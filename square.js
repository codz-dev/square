const axios = require('axios');

async function convertCurrency(apiKey, amount, fromCurrency, priceType) {
    const url = 'https://square.codz.dev/api/convert';

    const data = {
        'api_key': apiKey,
        'amount': amount,
        'from': fromCurrency,
        'price': priceType 
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Request failed. Error code: ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Error during the request: ${error.message}`);
    }
}

async function getCurrencies(apiKey) {
    const url = 'https://square.codz.dev/api/currencies';

    try {
        const response = await axios.get(url, {
            params: { api_key: apiKey },
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.data.success) {
            return response.data.currencies;
        } else {
            throw new Error(`Failed to retrieve currencies. Error: ${response.data.error}`);
        }
    } catch (error) {
        throw new Error(`Error during the request: ${error.message}`);
    }
}

module.exports = {
    convertCurrency,
    getCurrencies,
};
