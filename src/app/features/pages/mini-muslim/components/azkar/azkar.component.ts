import { Component, inject, OnDestroy } from '@angular/core';
import { TitleComponent } from "../../../../../shared/Components/UI/title/title.component";
import { KeyValuePipe, NgFor } from '@angular/common';
import { MiniMuslimService } from '../../../../services/mini-muslim.service';
import { Subscription } from 'rxjs';
import { RemembranceCategory, RemembranceItem } from '../../../../../shared/interfaces/remembrance-item';

@Component({
  selector: 'app-azkar',
  standalone: true,
  imports: [TitleComponent, NgFor, KeyValuePipe],
  templateUrl: './azkar.component.html',
  styleUrl: './azkar.component.css'
})
export class AzkarComponent implements OnDestroy {
  title: string = "Azkar";
  desc: string = "";
  azkarData: { [key: string]: RemembranceItem[] } = {};
  transformedAzkarData: RemembranceCategory[] = [];

  private readonly _miniMuslimService = inject(MiniMuslimService);
  getAzkarSub!: Subscription;

  ngOnInit(): void {
    this.getAzkarSub = this._miniMuslimService.getAzkar().subscribe({
      next: (res) => {
        this.azkarData = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  ngOnDestroy(): void {
    this.getAzkarSub?.unsubscribe();
  }
}
