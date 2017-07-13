import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojify'
})
export class EmojifyPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (typeof value !== 'string') {
      return "";
    }

    return value.replace(/pizza/ig, '🍕')
                .replace(/baseball/ig, '⚾️')
                .replace(/gun/ig, '🔫')
                .replace(/avocado/ig, '🥑');
  }

}
