const express = require('express');     // requiring express after "npm i express"
const app = express();                  // setting up the express app
const bodyParser = require('body-parser');

const port = process.env.PORT || 8081;
// Setting port to 8081 locally or whatever PORT has been se to.
// In production the PORT will be whatever your server uses (like Heroku or something else)

app.set('view engine', 'ejs');
// tells express that we use ejs as our view engine
// Need to create a view folder ot put all the views

app.use('/assets', express.static(__dirname + '/public'));
// setting our static folder taht we named "public".
// The http get request "/assets" will look into the "public" folder.

const urlencodedParser = bodyParser.urlencoded({ extended: false });

    // DEFINING ROUTES
    // 1- GET:
    app.get('/', (req, res) => {
        res.render('index', { test: 'Type in your name:' });
        // renders the index.ejs page in views. This is an ejs feature.
        // also passes some javascript values that can be displayed in the view (test).
    });

    app.get('/hello', (req, res) => {
        res.send('<html><head><title>Testing page</title></head><body><h1>Hello World!</h1></body></html>');
        // sends the html code to the path
    });
    
    // 2- POST:
    app.post('/postpath', urlencodedParser, (req, res) => {
        // res.send(`Thank you ${req.body.name}`);
        res.render('response', { name: req.body.name })
    });
    // 2 ways of displaying the result of a post request

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
// tells express to listen to the indicated port (8080 locally)