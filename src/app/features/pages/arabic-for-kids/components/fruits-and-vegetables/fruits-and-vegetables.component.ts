import { Component } from '@angular/core';
import { TitleComponent } from "../../../../../shared/Components/UI/title/title.component";

@Component({
  selector: 'app-fruits-and-vegetables',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './fruits-and-vegetables.component.html',
  styleUrl: './fruits-and-vegetables.component.css'
})
export class FruitsAndVegetablesComponent {
  title: string = "Fruits And Vegetables";

}
