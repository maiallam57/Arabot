import { Component } from '@angular/core';
import { ChatbotInputComponent } from "../../../shared/Components/UI/chatbot-input/chatbot-input.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat-in-arabic',
  standalone: true,
  imports: [ChatbotInputComponent, RouterLink],
  templateUrl: './chat-in-arabic.component.html',
  styleUrl: './chat-in-arabic.component.css'
})
export class ChatInArabicComponent {

}
