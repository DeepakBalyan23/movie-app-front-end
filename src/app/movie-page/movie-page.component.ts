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
  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap)=>this.movieId=parseInt(param.get('id')));
    this.data.getMovie(this.movieId).subscribe(
      data => this.movie = data 
    );
  }
}
