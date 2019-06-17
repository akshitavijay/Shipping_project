import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  onClick() {
    alert("you have clicked me");
  }

  values = ' ';
  onKey(value : string) {
    this.values = value;
  }

  names = [
    'ram','shyam','geeta','seeta'
  ];

  name: string ='akshita';

  constructor() { }

  ngOnInit() {
  }

}
