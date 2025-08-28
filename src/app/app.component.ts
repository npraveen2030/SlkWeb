import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { SelfServiceComponent } from "./components/self-service/self-service.component";
import { ApplicationsComponent } from "./components/applications/applications.component";
import { CalendarComponent } from './components/calendar/calendar.component';
import { TicketStatusComponent } from "./components/ticket-status/ticket-status.component";
import { KeyStrategicUpdateComponent } from "./components/key-strategic-update/key-strategic-update.component";
import { BirthdayComponent } from "./components/birthday/birthday.component";
import { LearningCalendarComponent } from "./components/learning-calendar/learning-calendar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, SelfServiceComponent,
    ApplicationsComponent, CalendarComponent, TicketStatusComponent, KeyStrategicUpdateComponent, BirthdayComponent, LearningCalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'slkweb';
}
