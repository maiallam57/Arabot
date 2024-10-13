import { Component } from '@angular/core';
import { TitleComponent } from "../../../../../shared/Components/UI/title/title.component";

@Component({
  selector: 'app-housekitchen-school',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './housekitchen-school.component.html',
  styleUrl: './housekitchen-school.component.css'
})
export class HousekitchenSchoolComponent {
  title: string = "House, kitchen, School";

}
