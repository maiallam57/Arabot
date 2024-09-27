import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/Components/UI/title/title.component";

@Component({
  selector: 'app-arabic-for-kids',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './arabic-for-kids.component.html',
  styleUrl: './arabic-for-kids.component.css'
})
export class ArabicForKidsComponent {

  title: string = "Arabic For Kids";
  desc: string = "Know about Arabic alphabets and words";
}
