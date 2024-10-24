import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../core/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private readonly _httpClient = inject(HttpClient);

  getArabotAnswer(question: string): Observable<any> {
    const url = `${environment.e3rabUrl}?question=${encodeURIComponent(question)}`;
    return this._httpClient.post(url, {});
  }

}
