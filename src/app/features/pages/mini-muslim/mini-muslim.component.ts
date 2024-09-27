import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/Components/UI/title/title.component";

@Component({
  selector: 'app-mini-muslim',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './mini-muslim.component.html',
  styleUrl: './mini-muslim.component.css'
})
export class MiniMuslimComponent {
  title: string = "Mini Muslim";
  desc: string = "Amazing Adventure ";
}
