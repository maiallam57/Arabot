import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/Components/UI/title/title.component";

@Component({
  selector: 'app-explain-topics',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './explain-topics.component.html',
  styleUrl: './explain-topics.component.css'
})
export class ExplainTopicsComponent {
  title: string = "Explain Topics"
  desc: string = "wide range of features aimed at enhancing the teaching experience and streamlining student learning through interactive, engaging methods"
}
