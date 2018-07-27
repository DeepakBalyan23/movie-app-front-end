import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies$: Object;
  movie:Object;
  id;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getMovies().subscribe(
      data => this.movies$ = data 
    );
  }

  fetchMovie(){
    this.data.getMovie().subscribe(
      data => this.movie = data 
    );
  }

}
