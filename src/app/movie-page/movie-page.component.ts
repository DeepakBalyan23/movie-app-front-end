import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import{Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  constructor(private data:DataService, private router: Router, private route:ActivatedRoute) { }
  movieId;
  movie: Object;
  movies;
  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap)=>this.movieId=parseInt(param.get('id')));
    this.movie = this.data.getMovie(this.movieId);
    this.data.getMovie(this.movieId).subscribe(
      data => this.movie = data 
    );
  }

  deleteMovie(movie){
    this.data.deleteMovie(movie).subscribe(
      data => this.movie = data 
    );
    this.data.getMovies().subscribe(
      data => this.movies = data 
    );
    this.router.navigate(['']);
  }
}
