import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterButtonsPipe } from '../../pipes/filter-buttons.pipe';

@Component({
  selector: 'app-self-service',
  standalone: true,
  imports: [FormsModule, CommonModule, FilterButtonsPipe],
  templateUrl: './self-service.component.html',
  styleUrl: './self-service.component.scss'
})
export class SelfServiceComponent {

  searchText: string = '';

  defaultButtons = [
    { label: 'Conference Room', icon: 'bi bi-door-open' },
    { label: 'Apply Leave', icon: 'bi bi-calendar-plus' },
    { label: 'Attendance Regularization', icon: 'bi bi-calendar-check' },
    { label: 'My Approvals', icon: 'bi bi-check2-square' },
    { label: 'Nucleus Password Reset', icon: 'bi bi-key' },
    { label: 'Email Signature', icon: 'bi bi-envelope-at' }
  ];

  allButtons = [
    ...this.defaultButtons,
    { label: 'Reports', icon: 'bi bi-journal-check' },
    { label: 'Security', icon: 'bi bi-shield-lock' },
    { label: 'Expenses', icon: 'bi bi-credit-card' },
    { label: 'Rewards', icon: 'bi bi-gift' },
    { label: 'Teams', icon: 'bi bi-people' },
    { label: 'Quick Actions', icon: 'bi bi-lightning' }
  ];

}
