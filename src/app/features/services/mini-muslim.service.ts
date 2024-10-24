import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../core/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiniMuslimService {

  private readonly _httpClient = inject(HttpClient);

  getPrayerTimings(date: string, city: string, country: string): Observable<any> {
    return this._httpClient.get(`${environment.PrayerTimingsUrl}${date}?city=${city}&country=${country}`)
  }

  getHolyQuran(number: string): Observable<any> {
    return this._httpClient.get(`${environment.holyQuranUrl}${number}`);
  }

  getHolyQuranAudio(speakerId: string): Observable<any> {
    return this._httpClient.get(`${environment.holyQuranUrlAudio}${speakerId}`);
  }

  getTafsir(number: string): Observable<any> {
    return this._httpClient.get(`${environment.tafsirUrl}${number}`);
  }

  getHadiths(page?: string, limit?: string): Observable<any> {
    if (page && limit) {
      return this._httpClient.get(`${environment.hadithsUrl}?page=${page}&limit=${limit}`)
    } else {
      return this._httpClient.get(`${environment.hadithsUrl}`)
    }
  }

  getAzkar(page?: string, limit?: string): Observable<any> {
    if (page && limit) {
      return this._httpClient.get(`${environment.azkarUrl}?page=${page}&limit=${limit}`)
    } else {
      return this._httpClient.get(`${environment.azkarUrl}`)
    }
  }
}
