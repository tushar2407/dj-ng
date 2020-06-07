import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  baseurl="http://127.0.0.1:8000";
  httpHeader= new HttpHeaders({'Content-Type':'application/json'});
  
  getAllMovies():Observable<any>{
    return this.http.get(this.baseurl+'/movies/', 
    {headers:this.httpHeader}
    );
  }
  getOneMovie(id):Observable<any>{
    return this.http.get(this.baseurl+'/movies/'+id+"/", 
    {headers:this.httpHeader}
    );
  }
  updateMovie(movie):Observable<any>{
    const body= {title:movie.title, year:movie.year, desc:movie.desc};
    return this.http.put(this.baseurl+'/movies/'+movie.id+'/',body,
    {headers:this.httpHeader}
    );
  }
  createMovie(movie):Observable<any>{
    const body={title:movie.title, year:movie.year, desc:movie.desc};
    return this.http.post(this.baseurl+"/movies/",body,
    {headers:this.httpHeader}
    );
  }
  deleteMovie(id):Observable<any>{
    return this.http.delete(this.baseurl+"/movies/"+id+"/",
    {headers:this.httpHeader}
    );
  }

}
