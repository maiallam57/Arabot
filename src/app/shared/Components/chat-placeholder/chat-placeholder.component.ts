import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-placeholder',
  standalone: true,
  imports: [],
  templateUrl: './chat-placeholder.component.html',
  styleUrl: './chat-placeholder.component.css'
})
export class ChatPlaceholderComponent {
  @Input({ required: true }) text!: string;
  @Input({ required: true }) color!: string;
  @Input({ required: true }) user!: boolean;

}
