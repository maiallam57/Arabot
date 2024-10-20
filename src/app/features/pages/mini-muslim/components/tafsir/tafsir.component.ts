import { Component } from '@angular/core';
import { TitleComponent } from "../../../../../shared/Components/UI/title/title.component";

@Component({
  selector: 'app-tafsir',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './tafsir.component.html',
  styleUrl: './tafsir.component.css'
})
export class TafsirComponent {
  title: string = "Tafsir";
  desc: string = "";
}
