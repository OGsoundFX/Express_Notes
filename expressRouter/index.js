const express = require('express');
const router = express.Router();

const app = express();

const port = process.env.PORT || 8082;

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
});
// define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page')
});
// define the about route
router.get('/about', function (req, res) {
    res.send('About birds')
});

app.use(router);

app.listen(port);