import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

    <p [style.color]="colors ? 'blue':'red' ">This is paragrah</p>
  
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  colors:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
