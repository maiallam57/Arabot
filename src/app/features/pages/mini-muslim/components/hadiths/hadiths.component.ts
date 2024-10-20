import { Component } from '@angular/core';
import { TitleComponent } from "../../../../../shared/Components/UI/title/title.component";

@Component({
  selector: 'app-hadiths',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './hadiths.component.html',
  styleUrl: './hadiths.component.css'
})
export class HadithsComponent {
  title: string = "Hadiths";
  desc: string = "";

}
