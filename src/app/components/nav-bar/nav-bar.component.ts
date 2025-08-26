import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// ✅ Declare bootstrap globally (for CDN usage)
declare var bootstrap: any;

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  searchText: string = '';
  filteredEmployees: Employee[] = [];
  isSearchFocused: boolean = false;
  selectedEmployee: Employee | null = null;

  constructor(private employeeService: EmployeeService) {}

  // 🔍 Employee Search
  onSearch() {
    if (this.searchText.trim()) {
      this.employeeService.getEmployees().subscribe(employees => {
        this.filteredEmployees = employees.filter(emp =>
          emp.fullName.toLowerCase().includes(this.searchText.toLowerCase())
        );
      });
    } else {
      this.filteredEmployees = [];
    }
  }

  // 👀 Handle search dropdown
  onFocus() {
    this.isSearchFocused = true;
  }

  onBlur() {
    // delay hiding so click registers
    setTimeout(() => (this.isSearchFocused = false), 200);
  }

  // 🧑 Select employee and show modal
  selectEmployee(emp: Employee) {
    this.selectedEmployee = emp;

    const modalEl = document.getElementById('employeeModal');
    if (modalEl) {
      try {
        let modal = bootstrap.Modal.getInstance(modalEl); // reuse if exists
        if (!modal) {
          modal = new bootstrap.Modal(modalEl);
        }
        modal.show();
      } catch (err) {
        console.error('❌ Bootstrap Modal error:', err);
      }
    }
  }

  // 🌞/🌙 Theme switcher
  toggleTheme(event: any) {
    const htmlEl = document.documentElement;
    if (event.target.checked) {
      htmlEl.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlEl.setAttribute('data-bs-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }
}
