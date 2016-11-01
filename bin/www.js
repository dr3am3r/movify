require('dotenv').config();

const express = require('express');
const app = express();

app.set('views', 'app/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index.ejs');
});

app.get('/search', function (req, res) {
    let result = [{"Title":"The Matrix","Year":"1999","imdbID":"tt0133093","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMDMyMmQ5YzgtYWMxOC00OTU0LWIwZjEtZWUwYTY5MjVkZjhhXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"},{"Title":"The Matrix Reloaded","Year":"2003","imdbID":"tt0234215","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA0NDM5MDY2OF5BMl5BanBnXkFtZTcwNzg5OTEzMw@@._V1_SX300.jpg"},{"Title":"The Matrix Revolutions","Year":"2003","imdbID":"tt0242653","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNjc4NTQzOV5BMl5BanBnXkFtZTcwNDYzMTQyMQ@@._V1_SX300.jpg"},{"Title":"The Matrix Revisited","Year":"2001","imdbID":"tt0295432","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTIzMTA4NDI4NF5BMl5BanBnXkFtZTYwNjg5Nzg4._V1_SX300.jpg"},{"Title":"Enter the Matrix","Year":"2003","imdbID":"tt0277828","Type":"game","Poster":"http://ia.media-imdb.com/images/M/MV5BMjA4NTYwNjk0M15BMl5BanBnXkFtZTgwODk3MDMwMTE@._V1_SX300.jpg"},{"Title":"The Matrix: Path of Neo","Year":"2005","imdbID":"tt0451118","Type":"game","Poster":"http://ia.media-imdb.com/images/M/MV5BYWM2ZWU5MDUtYTU2ZS00ZDFmLWIyNGEtNWZkMjRmZjI2YzMzXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SX300.jpg"},{"Title":"CR: Enter the Matrix","Year":"2009","imdbID":"tt1675286","Type":"game","Poster":"http://ia.media-imdb.com/images/M/MV5BMTExMzY3NTQ1NjleQTJeQWpwZ15BbWU3MDAyMjk2NzM@._V1_SX300.jpg"},{"Title":"Armitage III: Dual Matrix","Year":"2002","imdbID":"tt0303678","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTUwOTY3Mjg1MF5BMl5BanBnXkFtZTcwODI2MTAyMQ@@._V1_SX300.jpg"},{"Title":"Sex and the Matrix","Year":"2000","imdbID":"tt0274085","Type":"movie","Poster":"N/A"},{"Title":"Buhera mátrix","Year":"2007","imdbID":"tt0970173","Type":"movie","Poster":"N/A"}];
    res.json(result);
});

app.listen(process.env.WWW_PORT, function () {
    console.log(`Server is listening on port ${process.env.WWW_PORT}`);
});