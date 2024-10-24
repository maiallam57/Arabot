import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class E3rabService {

  private readonly _httpClient = inject(HttpClient);
  private baseUrl: string = "http://127.0.0.1:8000/api/v1/arabot?question=";


  getArabotAnswer(question: string): Observable<any> {
    const url = `${this.baseUrl}?question=${encodeURIComponent(question)}`;
    return this._httpClient.post(url, {});
  }

}
