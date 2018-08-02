import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import{Router} from '@angular/router';
import { Movie } from '../movie';
//import { OmbdMovie } from '../ombdMovie';
import { AlertsService } from 'angular-alert-module';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { OmbdMovie } from '../omdbMovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies$=Array<OmbdMovie>();
  movie = new Movie();
  dbMovies:Object;
  id=1000;
  //value = '';
  constructor(private data: DataService, private router:Router, private alert:AlertsService) { }

  ngOnInit() {
    this.fetchOmdbMovies();
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith<string | OmbdMovie>(''),
      map(value => typeof value === 'string' ? value : value.Title),
      map(Title => Title ? this._filter(Title) : this.movies$.slice())
    );
  }
  fetchMovie(id){
    this.router.navigate(['/movie', id]);
  }

  fetchOmdbMovies(){
    this.data.getMoviesFromOmdb(!this.myControl.value?"Harry":this.myControl.value).subscribe(
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
  myControl = new FormControl();
  filteredOptions: Observable<OmbdMovie[]>;

  displayFn(movie?: OmbdMovie): string | undefined {
    return movie ? movie.Title : undefined;
  }

  private _filter(name: string): OmbdMovie[] {
    const filterValue = name.toLowerCase();

    return this.movies$.filter(option => option.Title.toLowerCase().indexOf(filterValue) === 0);
  }

}
