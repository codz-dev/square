// test.js

const squareConverter = require('square-codz');

const apiKey = '123456';

// Test de la fonction convertCurrency
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
