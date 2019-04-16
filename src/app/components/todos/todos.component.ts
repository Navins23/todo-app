import { Component, OnInit } from '@angular/core';
import {Todos} from '../../models/Todos';
import {TodoService} from '../../services/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todos[];
  title='Rojit'
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(response=>{this.todos=response})
  }

}
