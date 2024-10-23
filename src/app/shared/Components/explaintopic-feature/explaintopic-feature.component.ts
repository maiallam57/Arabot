import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ChatbotInputComponent } from "../UI/chatbot-input/chatbot-input.component";
import { ChatPlaceholderComponent } from '../chat-placeholder/chat-placeholder.component';
import { E3rabService } from '../../../features/services/e3rab.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BreakLinePipe } from '../../pipes/break-line.pipe';

@Component({
  selector: 'app-explaintopic-feature',
  standalone: true,
  imports: [ChatbotInputComponent, ChatPlaceholderComponent, BreakLinePipe],
  templateUrl: './explaintopic-feature.component.html',
  styleUrl: './explaintopic-feature.component.css'
})
export class ExplaintopicFeatureComponent {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  IsMale: boolean = true;
  IsInput: boolean = true;
  response: any = true;
  questions: string[] = [];
  answers: string[] = [];

  question!: string;
  userColor: string = "#ADBCF2";
  chatColor: string = "#E1E8FF";

  private readonly _e3rabService = inject(E3rabService);
  inputFormSub!: Subscription;

  receiveInputValue(value: string) {
    this.question = value;
    this.questions.push(this.question);
    this.callApi();
  }

  callApi(): void {
    this.inputFormSub = this._e3rabService.getArabotAnswer(this.question).subscribe({
      next: (res) => {
        this.answers.push(res.response);
        console.log(res.response);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  private scrollToBottom(): void {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }


  ngAfterViewChecked() {
    this.scrollToBottom(); // Ensure it scrolls to the bottom after each view update
  }


  ngOnDestroy(): void {
    this.inputFormSub?.unsubscribe();
  }

}
