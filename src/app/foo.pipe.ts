import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foo'
})
export class FooPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
