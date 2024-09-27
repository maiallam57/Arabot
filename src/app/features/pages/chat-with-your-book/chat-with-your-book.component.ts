import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/Components/UI/title/title.component";

@Component({
  selector: 'app-chat-with-your-book',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './chat-with-your-book.component.html',
  styleUrl: './chat-with-your-book.component.css'
})
export class ChatWithYourBookComponent {
  title: string = "Chat with your Book";
  desc: string = "Ask about a specific book of your choice";
}
