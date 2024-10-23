import { Component, inject, Input, OnDestroy } from '@angular/core';
import { BreakLinePipe } from '../../pipes/break-line.pipe';
import { TextToSpeechService } from '../../../features/services/text-to-speech.service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-chat-placeholder',
  standalone: true,
  imports: [BreakLinePipe, NgIf],
  templateUrl: './chat-placeholder.component.html',
  styleUrl: './chat-placeholder.component.css'
})
export class ChatPlaceholderComponent implements OnDestroy {
  @Input({ required: true }) text!: string;
  @Input({ required: true }) color!: string;
  @Input({ required: true }) user!: boolean;

  textToSpeechServiceSub!: Subscription;

  private readonly _textToSpeechService = inject(TextToSpeechService);

  audioUrl: string | null = null;

  synthesizeText() {
    this.textToSpeechServiceSub = this._textToSpeechService.TextToSpeech(this.text).subscribe(blob => {
      // Create a URL for the audio blob
      const audioUrl = URL.createObjectURL(blob);
      this.audioUrl = audioUrl;
      // Optionally, you can automatically play the audio
      const audio = new Audio(audioUrl);
      audio.play();
    }, error => {
      console.error('Error synthesizing text:', error);
    });
  }

  ngOnDestroy(): void {
    this.textToSpeechServiceSub?.unsubscribe();
  }
}
