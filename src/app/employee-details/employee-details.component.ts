import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  details = [
    [
    {"name":"akshita"}, 
      { "salary": "100000"},
      {"department": "computer"}
     ],
      [
      {"name":"abhishek"},
        { "salary": "50000"},
        {"department": "electronics"}
       ]
      
  ];

  constructor() { }

  ngOnInit() {
  }

}
