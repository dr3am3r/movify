require('dotenv').config();

const express = require('express');
const app = express();

app.set('views', 'app/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index.ejs');
});

app.listen(process.env.WWW_PORT, function () {
    console.log(`Server is listening on port ${process.env.WWW_PORT}`);
});