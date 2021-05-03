// import express
const { assertBooleanLiteral } = require('@babel/types');
const express = require('express');

// add PORT designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// add express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// test the connection with GET test route
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

// add route to handle user requests that aren't supported by app
// this will override GET routes - make sure it's last of app.uses
app.use((req, res) => {
    res.status(404).end();
});

// add function that will start express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});