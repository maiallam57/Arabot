import { Component } from '@angular/core';
import { TitleComponent } from "../../../../../shared/Components/UI/title/title.component";

@Component({
  selector: 'app-holy-quran-audio',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './holy-quran-audio.component.html',
  styleUrl: './holy-quran-audio.component.css'
})
export class HolyQuranAudioComponent {
  title: string = "Holy Quran Audio";
  desc: string = "";
}
