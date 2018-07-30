import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MaterialModule} from './material';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviePageComponent,
    MovieCardComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
