import { Component } from '@angular/core';
import { TitleComponent } from "../../../../../shared/Components/UI/title/title.component";

@Component({
  selector: 'app-azkar',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './azkar.component.html',
  styleUrl: './azkar.component.css'
})
export class AzkarComponent {
  title: string = "Azkar";
  desc: string = "";
}
