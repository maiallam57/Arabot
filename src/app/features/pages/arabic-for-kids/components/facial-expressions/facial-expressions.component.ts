import { Component } from '@angular/core';
import { TitleComponent } from "../../../../../shared/Components/UI/title/title.component";

@Component({
  selector: 'app-facial-expressions',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './facial-expressions.component.html',
  styleUrl: './facial-expressions.component.css'
})
export class FacialExpressionsComponent {
  title: string = "Facial Expressions";

}
