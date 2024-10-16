import { Component } from '@angular/core';
import { ChatbotInputComponent } from "../UI/chatbot-input/chatbot-input.component";
import { ChatPlaceholderComponent } from '../chat-placeholder/chat-placeholder.component';

@Component({
  selector: 'app-explaintopic-feature',
  standalone: true,
  imports: [ChatbotInputComponent, ChatPlaceholderComponent],
  templateUrl: './explaintopic-feature.component.html',
  styleUrl: './explaintopic-feature.component.css'
})
export class ExplaintopicFeatureComponent {

  IsMale: boolean = true;
  IsInput: boolean = true;
  IsResponse: boolean = true;

  UserInput: string = "Test String";
  chatResponse: string = "Test String for chatbot: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corporis molestias, repellendus architecto minima cum natus deleniti, dolorem magni placeat iure fugiat error earum, repellat praesentium harum at molestiae unde";
  userColor: string = "#ADBCF2";
  chatColor: string = "#E1E8FF";

}
