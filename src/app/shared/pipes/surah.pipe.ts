import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'surah',
  standalone: true
})
export class SurahPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    return value
      .replace(/بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ/g, '');

  }
}
