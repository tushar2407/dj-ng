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

}
