import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // name is used in view
  // {{username | capitalize}}
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  // logic goes inside tranform() method

  // "new york" --> "New York"
  // {{"new york" | capitalize}}
  transform(value: any, args?: any): any {
    if (typeof value !== 'string') {
      return "";
    }

    // the value variable is the thing that you are modifying
    const wordArr = value.split(' ');

    let capWords = wordArr.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return capWords.join(' ');
  }

}
