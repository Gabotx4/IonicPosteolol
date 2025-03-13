import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { posteo } from '../modelos/posteo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PosteoService {

  private url = 'http://127.0.0.1:8000/api/posteo'; 

  constructor(private http: HttpClient) { }

  index(): Observable<posteo[]> {
    return this.http.get<{ "Este es el result de los posteos": posteo[] }>(this.url).pipe(
      map(response => response["Este es el result de los posteos"]) 
    );
  }

  show(id: string): Observable<posteo> {
    return this.http.get<{ data: posteo }>(this.url + '/' + id).pipe(
      map(response => response.data) 
    );
  }

  create(post:posteo):Observable<any>{
    return this.http.post(this.url, post);
    console.log("lol")

  }

}