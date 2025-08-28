import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterButtonsPipe } from '../../pipes/filter-buttons.pipe';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterButtonsPipe],
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.scss'
})
export class ApplicationsComponent {

  defaultApps = [
  { label: 'All About You (MySphere)', icon: 'bi bi-person-circle' },
  { label: 'Log Tickets - ITIS & EIS (SNOW)', icon: 'bi bi-tools' },
  { label: 'SLK Digital Payroll (ASCENT PowerHR)', icon: 'bi bi-cash-coin' },
  { label: 'ERP & Project Time (Nucleus Prime)', icon: 'bi bi-bar-chart-line' },
  { label: 'Udemy Business', icon: 'bi bi-mortarboard' },
  { label: 'Know Your Insurance (Benefit You)', icon: 'bi bi-heart-pulse' }
];

allApps = [
  ...this.defaultApps,
  { label: 'Idea Hub', icon: 'bi bi-lightbulb' },
  { label: 'Knowledge Base', icon: 'bi bi-journal-text' },
  { label: 'System Config', icon: 'bi bi-gear' },
  { label: 'HR Portal', icon: 'bi bi-briefcase' },
  { label: 'File Manager', icon: 'bi bi-cloud-arrow-down' },
  { label: 'Analytics Dashboard', icon: 'bi bi-graph-up-arrow' }
];

searchTextApps: string = '';


}
