import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitWords'
})
export class SplitWordsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value.length > 200) {
      return value.substring(0, 260) + '...';
    }
    return value;
  }

}
