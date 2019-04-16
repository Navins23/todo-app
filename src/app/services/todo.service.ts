import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Todos } from '../models/Todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url:string='https://jsonplaceholder.typicode.com/todos';
  limits='?_limit=7'
  constructor(private http:HttpClient) { }

  getTodos(){
    return this.http.get<Todos[]>(this.url+this.limits);
  }
}
