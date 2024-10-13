import { Component } from '@angular/core';
import { TitleComponent } from "../../../../../shared/Components/UI/title/title.component";

@Component({
  selector: 'app-alphabets',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './alphabets.component.html',
  styleUrl: './alphabets.component.css'
})
export class AlphabetsComponent {
  title: string = "Alphabets";
}
