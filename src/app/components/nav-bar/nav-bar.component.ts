import { Component } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Add this

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule, // ✅ enables *ngIf, *ngFor
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchText: string = '';
  selectedEmployee: Employee | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  onSearch(): void {
    const query = this.searchText.toLowerCase();
    this.filteredEmployees = this.employees.filter(
      (emp) =>
        emp.fullName.toLowerCase().includes(query) ||
        emp.employeeId.toString().includes(query)
    );
  }

  selectEmployee(emp: Employee): void {
    this.selectedEmployee = emp;
    this.searchText = emp.fullName;
    this.filteredEmployees = []; // close suggestion list
  }
}
