import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
})
export class DatePipePipe implements PipeTransform {
  transform(value: Date): string {
    if (!value) return '';

    return new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
      .format(value)
      .replace(',', '');
  }
}
