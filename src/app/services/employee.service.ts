import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee.model';
import { EMPLOYEES } from '../data/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {}

  // Simulate API call returning employees
  getEmployees(): Observable<Employee[]> {
    return of(EMPLOYEES);
  }

  // Get single employee by id
  getEmployeeById(id: number): Observable<Employee | undefined> {
    return of(EMPLOYEES.find(emp => emp.employeeId === id));
  }
}
