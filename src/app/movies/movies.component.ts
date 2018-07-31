import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import{Router} from '@angular/router';
import { Movie } from '../movie';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies$: Object;
  movie = new Movie();
  dbMovies:Object;
  id=1000;
  value = '';
  constructor(private data: DataService, private router:Router, private alert:AlertsService) { }

  ngOnInit() {
    this.fetchOmdbMovies("harry");
  }
  fetchMovie(id){
    this.router.navigate(['/movie', id]);
  }

  fetchOmdbMovies(title){
    if(!title)
      title=this.value;
    this.data.getMoviesFromOmdb(title).subscribe(
      data => this.movies$ = data['Search']
    );
    this.dbMovies=null;
  }

  fetchMovies(){
    this.data.getMovies().subscribe(
      data => this.dbMovies = data
    );
    this.movies$=null;
  }
  saveMovie(movieInput){
    this.movie.id = this.id++;
    this.movie.imdbId = movieInput.ImdbID;
    this.movie.title = movieInput.Title;
    this.movie.poster = movieInput.Poster;
    this.movie.year = movieInput.Year;
    this.data.saveMovie(this.movie).subscribe(
      data=>this.movie=data
    );
    this.alert.setMessage('Saved successfully!','success');
  }
  deleteMovie(movie){
    this.data.deleteMovie(movie).subscribe(
    );
    this.alert.setMessage('Deleted successfully!','success');
  }
}
