import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doSearch'
})
export class DoSearchPipe implements PipeTransform {

  // *ngFor="let oneRock of (theRocks | doSearch:'fast')"
  // value: theRocks
  // searchTerm: 'fast'
  transform(value: any, searchTerm:string): any {
    if (!value) {
      return [];
    }

    else if (!searchTerm) {
      return value;
    }

    var matchedResults = [];
    searchTerm  = searchTerm.toLowerCase();
    value.forEach((rock) => {
      if (rock.name.toLowerCase().includes(searchTerm)) {
        matchedResults.push(rock);
      }
      });
    return matchedResults;
  }
}
