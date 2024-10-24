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
      selectedDate: ['']
    });
    this.dateForm.get('selectedDate')?.setValue(new Date()); // Set today's date
    this.dateForm.get('selectedDate')?.value;
    this.onDateSubmit()
  }

  onDateSubmit() {
    const selectedDate = this.dateForm.get('selectedDate')?.value;
    if (selectedDate) {
      const formattedDate = this.formatDate(selectedDate);
      this.getPrayerTimingsSub = this._miniMuslimService.getPrayerTimings(formattedDate, "cairo", "egypt").subscribe({
        next: (res) => {
          this.prayerData = res;
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  private formatDate(date: Date | string): string {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const year = d.getFullYear();
    return `${day}-${month}-${year}`; // Format as DD-MM-YYYY
  }

  // Function to get the icon for a prayer time
  getIconForPrayer(prayerName: string): string {
    return this.prayerIcons[prayerName] || this.prayerIcons['default'];
  }


  ngOnDestroy(): void {
    this.getPrayerTimingsSub?.unsubscribe();
  }
}
