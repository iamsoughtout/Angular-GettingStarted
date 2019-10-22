// Creating a custom pipe for replacing special characters in our html to spaces

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'   // use this name in the html

})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, ' ');   // use the JS string replace() method to replace the specified character with a space
  }
}

