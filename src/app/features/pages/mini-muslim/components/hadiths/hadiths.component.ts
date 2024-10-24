import { Component, inject } from '@angular/core';
import { TitleComponent } from "../../../../../shared/Components/UI/title/title.component";
import { NgClass, NgFor } from '@angular/common';
import { MiniMuslimService } from '../../../../services/mini-muslim.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hadiths',
  standalone: true,
  imports: [TitleComponent, NgFor, NgClass],
  templateUrl: './hadiths.component.html',
  styleUrl: './hadiths.component.css'
})
export class HadithsComponent {
  title: string = 'Hadiths';
  desc: string = '';

  private readonly _miniMuslimService = inject(MiniMuslimService);
  getHolyQuranSub!: Subscription;
  hadithData: any = {};

  ngOnInit(): void {
    this.fetchHadiths(); // Fetch initial hadith data
  }

  ngOnDestroy(): void {
    this.getHolyQuranSub?.unsubscribe();
  }

  fetchHadiths(page: number = 1, limit: number = 10): void {
    this.getHolyQuranSub = this._miniMuslimService.getHadiths(page.toString(), limit.toString()).subscribe({
      next: (res) => {
        this.hadithData = res;
        console.log(this.hadithData);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  // Navigation methods
  goToPage(page: number): void {
    if (page >= 1 && page <= this.hadithData.pagination.totalPages) {
      this.fetchHadiths(page); // Fetch data for the selected page
    }
  }

  isCurrentPage(page: number): boolean {
    return this.hadithData.pagination.currentPage === page;
  }
}
