import { MiniMuslimService } from './../../../../services/mini-muslim.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TitleComponent } from "../../../../../shared/Components/UI/title/title.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-prayer-timings',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './prayer-timings.component.html',
  styleUrl: './prayer-timings.component.css'
})
export class PrayerTimingsComponent implements OnInit, OnDestroy {

  title: string = "Prayer Timings";
  desc: string = "";
  PrayerTimings!: any;

  private readonly _miniMuslimService = inject(MiniMuslimService);
  getPrayerTimingsSub!: Subscription;

  ngOnInit(): void {
    this.getPrayerTimingsSub = this._miniMuslimService.getPrayerTimings("20-10-2024", "cairo", "egypt").subscribe({
      next: (res) => {
        // this.isLoading = true;
        this.PrayerTimings = res;
        console.log(this.PrayerTimings)
      },
      error: (err) => {
        console.log(err);
      }
    });
    // this.isLoading = false;
  }

  ngOnDestroy(): void {
    this.getPrayerTimingsSub?.unsubscribe();
  }
}
