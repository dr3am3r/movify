# API

* GET /search
  - title

_200_ OK [ {movieObj} ]
_400_ Bad Request



* POST /subscribe
  - movieId
  - movieTitle ?
  - releaseDate
  - daysBefore
  - email

_201_ Created
_400_ Bad Request