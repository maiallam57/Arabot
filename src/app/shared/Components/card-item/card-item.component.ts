import { Component, Input } from '@angular/core';
import { TitleComponent } from "../UI/title/title.component";

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {
  @Input({ required: true }) title!: string;
  @Input() img!: string;
}
