import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/Components/UI/title/title.component";
import { CardItemComponent } from "../../../shared/Components/card-item/card-item.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mini-muslim',
  standalone: true,
  imports: [RouterLink, TitleComponent, CardItemComponent],
  templateUrl: './mini-muslim.component.html',
  styleUrl: './mini-muslim.component.css'
})
export class MiniMuslimComponent {
  IsMale: Boolean = true;
  title: string = "Mini Muslim";
  desc: string = "Amazing Adventure ";
}
