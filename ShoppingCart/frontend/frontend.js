// frontend.js

const express = require('express');
const axios = require('axios');

const app = express();

app.get('/api/products', async (req, res) => {
    try {
        // Fetch the list of products from the backend API
        const response = await axios.get('http://backend/api/products');
        const products = response.data;
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/checkout', async (req, res) => {
    try {
        // Send the checkout request to the backend API
        const response = await axios.post('http://backend/api/checkout', req.body);
        const message = response.data.message;
        res.json({ message });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Frontend server is running on port ${port}`);
});
