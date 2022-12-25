const express = require('express');        // import express
var cors = require('cors')                 // import cros
var bodyParser = require('body-parser')    // import 'body-parser
var NoteRouter = require('./route/NoteRoute')    // import 'body-parser
var CustomerRouter = require('./route/CustomerRouter')    // import 'body-parser
var db = require('./database/database')
var ErrorHandler = require('./error/api-error-handler')    
var dotenv=require('dotenv').config()

// console.log(process.env.PORT)

const app =  express();
app.use(cors());


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



app.get('/',  (req, res) =>{
    res.send('Server started ........');
});

app.use('/api/v1',NoteRouter);
app.use('/api/v1',CustomerRouter);

app.use(ErrorHandler);

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

