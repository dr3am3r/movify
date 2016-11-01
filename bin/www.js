require('dotenv').config();

const express = require('express');
const app = express();

app.set('views', 'app/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index.ejs');
});

app.get('/search', function (req, res) {
    let result = [{"Title":"Wonder Woman","Year":"2017","imdbID":"tt0451279","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2ODQ1OTUyOF5BMl5BanBnXkFtZTgwMjc2MzE1OTE@._V1_SX300.jpg"}];
    res.json(result);
});

app.listen(process.env.WWW_PORT, function () {
    console.log(`Server is listening on port ${process.env.WWW_PORT}`);
});