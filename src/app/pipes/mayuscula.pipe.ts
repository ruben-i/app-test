import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'mayuscula'
})
export class MayusculaPipe implements PipeTransform {
    transform(text: string): String {       
        return text.toUpperCase();       
    }
}