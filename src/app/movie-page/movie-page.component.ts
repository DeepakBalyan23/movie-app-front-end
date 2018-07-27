import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movie;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getMovie().subscribe(
      data => this.movie = data 
    );
  }
}
