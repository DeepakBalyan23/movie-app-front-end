import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private router: Router) { }
  getMovies() {
    return this.http.get('http://localhost:8092/movie/api/v1/movies')
  }

  getMovie() {
    return this.http.get('http://localhost:8092/movie/api/v1'+this.router.url)
  }
}
