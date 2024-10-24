import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../core/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  private readonly _httpClient = inject(HttpClient);

  TextToSpeech(text: string): Observable<Blob> {
    const url = `${environment.TextToSpeechUrl}?request=${encodeURIComponent(text)}`;
    // const body = { text };
    return this._httpClient.post(`${url}`, {}, {
      responseType: 'blob' // Set responseType to 'blob' to receive the audio file
    });

  }
}
