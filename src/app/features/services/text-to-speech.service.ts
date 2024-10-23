import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  private readonly _httpClient = inject(HttpClient);
  private baseUrl: string = "http://127.0.0.1:9000/synthesize";

  TextToSpeech(text: string): Observable<Blob> {
    const url = `${this.baseUrl}?request=${encodeURIComponent(text)}`;
    // const body = { text };
    return this._httpClient.post(`${url}`, {}, {
      responseType: 'blob' // Set responseType to 'blob' to receive the audio file
    });

  }
}
