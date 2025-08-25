import { Component } from '@angular/core';
import { ApplicationsComponent } from "../applications/applications.component";

@Component({
  selector: 'app-self-service',
  standalone: true,
  imports: [ApplicationsComponent],
  templateUrl: './self-service.component.html',
  styleUrl: './self-service.component.scss'
})
export class SelfServiceComponent {

}
