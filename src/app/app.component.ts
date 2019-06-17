import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'myproject';
  heading: string;
  names = ['akshita','akshi','abhhi','abhishek'];

  constructor(){
    this.heading = "hello world";
  }
}
