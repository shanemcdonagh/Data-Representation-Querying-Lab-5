

// Import Express module
const express = require('express');

// Sets up an Express Application (server application)
const app = express();

// Specifies port of application
const port = 4000;

// Importing body-parser
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// Listening for http request with "get" method coming into localhost:4000
app.get('/', (req, res) => {
    // Returns text
    res.send('Welcome to Data Representation & Querying');
})

// Listening for http request with "get" method coming into localhost:4000
app.get('/hello/:name', (req, res) => {
    // Returns 'Hello' and the specified parameter
    res.send('Hello ' + req.params.name);
})

// Listening for http request with "get" method coming into localhost:4000/api/movies
app.get('/api/movies', (req, res) => {
    // Set an array of JSON data
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];

    // Set a status 200 and send json data (HTTP response) and status message
    res.status(200).json({
        mymovies: movies,
        'message': 'Data Sent'
    });
})

//Listening for http request with "get" method coming into localhost:4000/index
app.get('/index', (req, res) => {
    // Re-directs the page to index.html
    res.sendFile(__dirname + '/index.html');
})

//Listening for http request with "get" method coming into localhost:4000/name
app.get('/name', (req, res) => {
    // Sends data of the value of "firstname" and "lastname" from index.html
    res.send('Hello ' + req.query.firstname + " " + req.query.lastname);
})

//Listening for http request with "post" method coming into localhost:4000/name
app.post('/name', (req, res) => {
    // Sends data of the value of "firstname" and "lastname" from index.html
    res.send('So long ' + req.body.firstname + " " + req.body.lastname);
})

//Setting up server to listen to http requests coming in through port 4000
app.listen(port, () => {
    // Outputs to console when server has begun listening for http requests through port
    console.log(`Example app listening at http://localhost:${port}`);
})