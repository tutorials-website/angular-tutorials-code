import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: string, age: string): string {
    if(age<='30')

    return "Jr. "+value;
    else
    return "Sr. "+value;
  }

}
