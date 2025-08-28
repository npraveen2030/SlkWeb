import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  currentDate = new Date();
  currentMonth!: number;
  currentYear!: number;
  weeks: Date[][] = [];
  selectedDate!: Date | null;

  ngOnInit() {
    this.currentMonth = this.currentDate.getMonth();
    this.currentYear = this.currentDate.getFullYear();
    this.generateCalendar(this.currentYear, this.currentMonth);
  }

  generateCalendar(year: number, month: number) {
    this.weeks = [];
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let day = 1 - firstDay;
    for (let week = 0; week < 6; week++) {
      let weekDays: Date[] = [];
      for (let i = 0; i < 7; i++) {
        weekDays.push(new Date(year, month, day));
        day++;
      }
      this.weeks.push(weekDays);
    }

    this.currentDate = new Date(year, month);
  }

  isCurrentMonth(date: Date): boolean {
    return date.getMonth() === this.currentMonth;
  }

  selectDate(date: Date) {
    if (this.isCurrentMonth(date)) {
      this.selectedDate = date;
    }
  }

  isSelected(date: Date): boolean {
    return (
      this.selectedDate?.getDate() === date.getDate() &&
      this.selectedDate?.getMonth() === date.getMonth() &&
      this.selectedDate?.getFullYear() === date.getFullYear()
    );
  }

  // Navigation
  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar(this.currentYear, this.currentMonth);
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar(this.currentYear, this.currentMonth);
  }

  prevYear() {
    this.currentYear--;
    this.generateCalendar(this.currentYear, this.currentMonth);
  }

  nextYear() {
    this.currentYear++;
    this.generateCalendar(this.currentYear, this.currentMonth);
  }
}
