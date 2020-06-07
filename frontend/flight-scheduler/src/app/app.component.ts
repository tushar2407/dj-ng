import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent {
  movies=[{title:'titanic'}];
  //movies:any;
  movie;
  title;
  desc;
  year;
  selectedMovie;
  constructor( private api:ApiService){
    this.getMovies();
    this.selectedMovie={title:'', desc:'', year:0, id:-1};
    this.movie={title:'', desc:'', year:0, id:-1};
  }
  getMovies= () =>{
    this.api.getAllMovies().subscribe(
      data =>{
        this.movies=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    
    );
  }
  movieClicked= (movie)=>{
    //console.log(movie.id);
    this.api.getOneMovie(movie.id).subscribe(
      data =>{
        console.log(data);
        // this.title=data.title;
        // this.desc=data.desc;
        // this.year=data.year;
        this.selectedMovie=data;
      },
      error=>{
        console.log(error);
      }
    );
  }
  updateMovie=()=>{
    this.api.updateMovie(this.selectedMovie).subscribe(
      data=>{
        this.selectedMovie=data;
        this.getMovies();
      },
      error=>{
        console.log(error);
      }
    );
  }
  createMovie=()=>{
    this.api.createMovie(this.selectedMovie).subscribe(
      data=>{
       this.movies.push(data);
       //this.selectedMovie
      },
      error=>{
        console.log(error);
      }
    );
  }
  deleteMovie=()=>{
    this.api.deleteMovie(this.selectedMovie.id).subscribe(
      data=>{
        console.log(data);
        this.getMovies();
      },
      error=>{
        console.log(error);
      }
    )
  }
}
