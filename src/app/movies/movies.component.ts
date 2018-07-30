import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import{Router} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies$: Object;
  constructor(private data: DataService, private router:Router) { }

  ngOnInit() {
    this.data.getMovies().subscribe(
      data => this.movies$ = data 
    );
  }
  fetchMovie(id){
    this.router.navigate(['/movie', id]);
  }
}
