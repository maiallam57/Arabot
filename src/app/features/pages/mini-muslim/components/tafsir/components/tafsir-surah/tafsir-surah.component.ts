import { Component, inject, Input } from '@angular/core';
import { MiniMuslimService } from '../../../../../../services/mini-muslim.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { SurahPipe } from '../../../../../../../shared/pipes/surah.pipe';

@Component({
  selector: 'app-tafsir-surah',
  standalone: true,
  imports: [NgFor, NgIf, SurahPipe],
  templateUrl: './tafsir-surah.component.html',
  styleUrl: './tafsir-surah.component.css'
})
export class TafsirSurahComponent {
  surahNumber!: number;

  private readonly _miniMuslimService = inject(MiniMuslimService);
  private readonly _activatedRoute = inject(ActivatedRoute);
  getHolyQuranSub!: Subscription;
  ayat: any;

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.surahNumber = +params['number'];
    });

    this._miniMuslimService.getTafsir((this.surahNumber.toString())).subscribe({
      next: (res) => {
        this.ayat = res.result;
        console.log(this.ayat);
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
