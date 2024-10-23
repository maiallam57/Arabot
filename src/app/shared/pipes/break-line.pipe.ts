import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breakLine',
  standalone: true
})
export class BreakLinePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    // Replace newlines, periods, and <br> with <br>
    return value
      .replace(/\n/g, '. ')    // Replaces newline characters
      .replace(/<br>/g, '. ')
      .replace(/"/g, ' ');

  }

}
