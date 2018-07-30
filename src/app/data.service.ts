import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Router} from '@angular/router';
import { Movie } from './movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private router: Router) { }
  getMovies() {
    return this.http.get('http://localhost:8092/movie/api/v1/movies')
  }

  getMovie(id) {
    return this.http.get('http://localhost:8092/movie/api/v1/movie/'+id)
  }

  deleteMovie(movie) {
    return this.http.delete('http://localhost:8092/movie/api/v1/movie/'+movie.id)
  }

  getMoviesFromOmdb(){
    return this.http.get('http://www.omdbapi.com/?s=fast&apikey=6db283eb');
  }

  saveMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>('http://localhost:8092/movie/api/v1/movie', movie);
  }
}
