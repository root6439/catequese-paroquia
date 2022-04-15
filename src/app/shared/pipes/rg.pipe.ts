import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'rg' })
export class RgPipe implements PipeTransform {
  transform(value: string) {
    return value.replace(/(\d{1})(\d{3})(\d{3})/, '$1.$2.$3');
  }
}
