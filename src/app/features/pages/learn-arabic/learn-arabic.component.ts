import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/Components/UI/title/title.component";
import { CardItemComponent } from "../../../shared/Components/card-item/card-item.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-learn-arabic',
  standalone: true,
  imports: [RouterLink, TitleComponent, CardItemComponent],
  templateUrl: './learn-arabic.component.html',
  styleUrl: './learn-arabic.component.css'
})
export class LearnArabicComponent {
  title: string = "Learn Arabic";
  desc: string = "Explanation of the Arabic learning Curriculum";

}
