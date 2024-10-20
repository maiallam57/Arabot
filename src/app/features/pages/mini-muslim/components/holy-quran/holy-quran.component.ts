import { Component } from '@angular/core';
import { TitleComponent } from "../../../../../shared/Components/UI/title/title.component";

@Component({
  selector: 'app-holy-quran',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './holy-quran.component.html',
  styleUrl: './holy-quran.component.css'
})
export class HolyQuranComponent {
  title: string = "Holy Quran";
  desc: string = "";
}
