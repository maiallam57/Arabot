import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-chatbot-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './chatbot-input.component.html',
  styleUrl: './chatbot-input.component.css'
})
export class ChatbotInputComponent {
  isLoading: boolean = false;

  @Output() question: EventEmitter<string> = new EventEmitter()

  sendValue(inputValue: string): void {
    this.question.emit(inputValue);
  }

  inputForm = new FormGroup({
    question: new FormControl(null, [Validators.required, Validators.minLength(5)])
  })

  submitQuestion() {
    if (this.inputForm.valid) {
      this.isLoading = true;
      this.sendValue(this.inputForm.value.question!)
      this.inputForm.reset();
    } else {
      this.isLoading = false;
    }
    this.isLoading = false;
  }

}
