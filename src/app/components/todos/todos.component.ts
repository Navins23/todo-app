import { Component, OnInit } from '@angular/core';
import {Todos} from '../../models/Todos';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todos[];
  title='Rojit'
  constructor() { }

  ngOnInit() {
    this.todos=[
      {id:1,title:'title1',completed:false},
      {id:2,title:'title2',completed:true},
      {id:3,title:'title3',completed:false},

    ]
  }

}
