from fastapi import FastAPI, Body
from fastapi.responses import HTMLResponse
from pydantic import BaseModel
from typing import Optional, List

app = FastAPI()
app.title = "FastAPI By Juan"
app.version = "1.0.0"

class Movie(BaseModel):
     id: int
     title: str
     overview: str
     year: int
     rating: float
     category: str

class MovieUpdate(BaseModel):
     title: str
     overview: str
     year: int
     rating: float
     category: str



movies = [
    {
      "id":1,
      "title": "Avatar",
      "overview": "En un exuberante planeta llamado Pandora viven los Navi...",
      "year":"2022",
      "rating": 7.8,
      "category": "ciencia ficcion",  
    },
    {
      "id":2,
      "title": "Fight Club",
      "overview": "En un exuberante planeta llamado Pandora viven los Navi...",
      "year":"2009",
      "rating": 7.8,
      "category": "accion",  
    }
]


@app.get('/', tags=['Home'])
def home():
    return "Landing Page"


@app.get('/movies', tags=['Movies'])
def get_movies() -> List[Movie]:
    return movies


@app.get('/movies/{id}', tags=['Movies'])
def get_movie(id: int) -> Movie:
    for movie in movies:
        if movie['id'] == id:
            return movie
    return []    


@app.get('/movies/', tags=['Movies'])
def get_movie_by_category(category:str, year:str) -> Movie:
    for movie in movies:
        if (movie['category'] == category) and (movie['year'] == year):
            return movie
    return [] 


@app.post('/movies', tags=['Movies'])
def create_movie(movie: Movie ) -> Movie:
        movies.append(Movie.model_dump())
        return movies


@app.put('/movies/{id}', tags=["Movies"])
def update_movie(id:int, movie:MovieUpdate) -> Movie:
        for movie in movies:
            if movie['id'] == id:
                movie['title'] = movie.title
                movie['overview'] = movie.overview
                movie['year'] = movie.year
                movie['rating'] = movie.rating
                movie['category'] = movie.category
        return movies 


@app.delete('/movies/{id}', tags=["Movies"])
def delete_movie() -> Movie:
    for movie in movies:
        if movie['id'] == id:
            movies.remove(movie)
    return movies
        

