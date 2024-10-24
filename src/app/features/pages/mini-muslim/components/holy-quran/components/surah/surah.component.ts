import { NgFor, NgIf } from '@angular/common';
import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MiniMuslimService } from '../../../../../../services/mini-muslim.service';
import { SurahPipe } from '../../../../../../../shared/pipes/surah.pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-surah',
  standalone: true,
  imports: [NgFor, NgIf, SurahPipe],
  templateUrl: './surah.component.html',
  styleUrl: './surah.component.css'
})
export class SurahComponent implements OnInit, OnDestroy {
  // @Input() 
  surahNumber!: number;

  private readonly _miniMuslimService = inject(MiniMuslimService);
  private readonly _activatedRoute = inject(ActivatedRoute);
  getHolyQuranSub!: Subscription;
  surah: any;

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.surahNumber = +params['number'];
    });

    this._miniMuslimService.getHolyQuran((this.surahNumber.toString())).subscribe({
      next: (res) => {
        this.surah = res.data;
        console.log(this.surah);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnDestroy(): void {
    this.getHolyQuranSub?.unsubscribe();
  }

}
