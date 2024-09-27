import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/Components/UI/title/title.component";

@Component({
  selector: 'app-learn-arabic',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './learn-arabic.component.html',
  styleUrl: './learn-arabic.component.css'
})
export class LearnArabicComponent {
  title: string = "Learn Arabic";
  desc: string = "Explanation of the Arabic learning Curriculum";

}
