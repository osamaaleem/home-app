import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  constructor() {
    console.log('This is my constructor');
  }
  ngOnInit(){
    console.log("This is On Init");
  }
  public name: string = 'Osama';
}
