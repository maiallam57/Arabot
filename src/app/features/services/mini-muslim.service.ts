import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiniMuslimService {

  private readonly _httpClient = inject(HttpClient);
  private baseUrl: string = "https://api.aladhan.com/v1/timingsByCity/";



  getPrayerTimings(date: string, city: string, country: string): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}${date}?city=${city}&country=${country}`)
  }




}
