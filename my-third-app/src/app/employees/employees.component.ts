import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employeesDetails = [
    {
        firstName: "jay",
        lastName: "abhani",
        age: 10
    },
    {
        firstName: "yash",
        lastName: "shah",
        age: 18
    },
    {
        firstName: "neha",
        lastName: "sharma",
        age: 36
    },
    {
        firstName: "kajal",
        lastName: "joshi",
        age: 24
    },
    {
        firstName: "rohan",
        lastName: "shah",
        age: 45
    }
]
}
