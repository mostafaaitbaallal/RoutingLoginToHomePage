import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, firstName: 'Elena', lastName: 'Muskato', age: 7},
    {position: 2, firstName: 'Scarlet', lastName: 'Spur', age: 7},
    {position: 3, firstName: 'Virgin', lastName: 'Muskato', age: 7},
    {position: 4, firstName: 'Ali', lastName: 'Muskato', age: 7},
    {position: 5, firstName: 'Beef', lastName: 'Muskato', age: 8},
    {position: 6, firstName: 'Aligator', lastName: 'Muskato', age: 9},
    {position: 7, firstName: 'Gla', lastName: 'Muskato', age: 16},
  ];
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'age'];
  dataSource = this.ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}


export interface PeriodicElement {
  firstName: string;
  position: number;
  lastName: string;
  age: number;
}



