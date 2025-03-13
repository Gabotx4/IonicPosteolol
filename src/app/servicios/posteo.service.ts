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
  private usersUrl = 'http://127.0.0.1:8000/api/usersposts';

  constructor(private http: HttpClient) { }

  index():Observable<posteo[]> {
    return this.http.get<posteo[]>(this.url)

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
  getUsersWithPosts(): Observable<{ nombre: string, foto1: string }[]> {
    return this.http.get<{ status: boolean, data: { nombre: string, foto1: string }[] }>(this.usersUrl).pipe(
      map(response => response.data) // Extrae solo el array de usuarios
    );
  }

}