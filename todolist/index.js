const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`app launched on port ${port}`)
});