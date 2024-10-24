import { MiniMuslimService } from './../../../../services/mini-muslim.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TitleComponent } from "../../../../../shared/Components/UI/title/title.component";
import { Subscription } from 'rxjs';
import { CommonModule, KeyValuePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { PrayerTimings } from '../../../../../shared/interfaces/prayer-timings';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-prayer-timings',
  standalone: true,
  imports: [TitleComponent, KeyValuePipe, NgClass, CommonModule, ReactiveFormsModule, FormsModule,
  ],
  templateUrl: './prayer-timings.component.html',
  styleUrl: './prayer-timings.component.css'
})
export class PrayerTimingsComponent implements OnInit, OnDestroy {

  title: string = "Prayer Timings";
  desc: string = "";
  prayerData!: PrayerTimings;
  prayerIcons: { [key: string]: string } = {
    Fajr: 'fa-cloud-moon',
    Sunrise: 'fa-sun',
    Dhuhr: 'fa-pray',
    Asr: 'fa-cloud-sun',
    Maghrib: 'fa-sun',
    Isha: 'fa-moon',
    default: 'fa-clock'
  };
  dateForm!: FormGroup;
  private fb = inject(FormBuilder);  // Injecting FormBuilder
  private readonly _miniMuslimService = inject(MiniMuslimService);
  getPrayerTimingsSub!: Subscription;

  ngOnInit(): void {
    // Initialize form
    this.dateForm = this.fb.group({
      selectedDate: [new Date()]
    });

    this.fetchPrayerTimings(this.formatDate(new Date()));
  }

  fetchPrayerTimings(date: string): void {
    this.getPrayerTimingsSub = this._miniMuslimService.getPrayerTimings(date, 'cairo', 'egypt').subscribe({
      next: (res) => {
        this.prayerData = res;
        console.log(this.prayerData);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  // Function to handle date selection and submit form
  onDateSubmit(): void {
    const selectedDate = this.dateForm.get('selectedDate')?.value;
    const formattedDate = this.formatDate(selectedDate);
    this.fetchPrayerTimings(formattedDate);
  }

  // Function to get the icon for a prayer time
  getIconForPrayer(prayerName: string): string {
    return this.prayerIcons[prayerName] || this.prayerIcons['default'];
  }
  ngOnDestroy(): void {
    this.getPrayerTimingsSub?.unsubscribe();
  }
}
