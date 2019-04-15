import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo;
  constructor() { }
  
  ngOnInit() {
  
  }
  setClasses(){
    let classes={
      todo:true,
      'is-complete':this.todo.completed
    }
    return classes;
  }
  onToggle(x){
    x.completed = !x.completed
  }
  

}
