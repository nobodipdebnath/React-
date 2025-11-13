const express = require('express');
const cors = require('cors');
const phones = require('./phones.json');
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('My phone information coming soon one two and three')
})

app.get('/phones', (req, res) => {
    res.send(phones);
})

app.get('/phones/:id', (req, res) => {
    const  id = parseInt(req.params.id);
    console.log('req id', id)
    const phone = phones.find(phone => phone.id == id) || {}
    res.send(phone);
})

app.listen(port, () => {
    console.log(`my phone server is running in port ${port}`)
})