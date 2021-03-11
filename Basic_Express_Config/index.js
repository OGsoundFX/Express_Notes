const express = require('express');     // requiring express after "npm i express"
const app = express();                  // setting up the express app

const port = process.env.PORT || 8080;
// Setting port to 8080 locally or whatever PORT has been se to.
// In production the PORT will be whatever your server uses (like Heroku or something else)

app.set('view engine', 'ejs');
// tells express that we use ejs as our view engine
// Need to create a view folder ot put all the views

app.use('/assets', express.static(__dirname + '/public'));
// setting our static folder taht we named "public".
// The http get request "/assets" will look into the "public" folder.

app.get('/', (req, res) => {
    res.render('index');
    console.log(`listening on port ${port}`);
});
// simple get request that renders the "index.ejs" page in the view folder

app.listen(port); // tells express to listen to the indicated port (8080 locally)