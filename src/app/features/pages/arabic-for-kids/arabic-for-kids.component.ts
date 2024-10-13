import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/Components/UI/title/title.component";
import { CardItemComponent } from "../../../shared/Components/card-item/card-item.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-arabic-for-kids',
  standalone: true,
  imports: [RouterLink, TitleComponent, CardItemComponent],
  templateUrl: './arabic-for-kids.component.html',
  styleUrl: './arabic-for-kids.component.css'
})
export class ArabicForKidsComponent {

  title: string = "Arabic For Kids";
  desc: string = "Know about Arabic alphabets and words";
}
