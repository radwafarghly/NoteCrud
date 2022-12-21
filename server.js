const express = require('express');        // import express
var cors = require('cors')                 // import cros
var bodyParser = require('body-parser')    // import 'body-parser
var NoteRouter = require('./route/NoteRoute')    // import 'body-parser
var ErrorHandler = require('./error/api-error-handler')    

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
app.use(ErrorHandler);

app.listen(3000,()=>{
    console.log('Server start.......');
});

