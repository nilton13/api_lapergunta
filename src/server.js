require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require('express');
const routes = require('./routes');
const { errors } = require('celebrate');

require('./database');

const app = express();

app.use(express.json());

app.use(routes);

app.use(errors);

app.listen(3333, () =>{
    console.log('Server is running on Port 3333');
})