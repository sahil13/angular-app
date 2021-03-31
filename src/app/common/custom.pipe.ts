import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  transform(value: string): string {
    //remove - from location

    const a = value.split('-');

    return a[0] + ' ' + a[1];

    /* switch (value) {
      case 1:
        return 'a';
      case 2:
        return 'b';
      case 3:
        return 'c';
    } */

    // if (value === 1) { return 'aa'; }
  }
}
