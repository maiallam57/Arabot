import { Component } from '@angular/core';
import { TitleComponent } from "../../../../../shared/Components/UI/title/title.component";

@Component({
  selector: 'app-weekdays-and-months',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './weekdays-and-months.component.html',
  styleUrl: './weekdays-and-months.component.css'
})
export class WeekdaysAndMonthsComponent {
  title: string = "Weekdays And Months";
}
