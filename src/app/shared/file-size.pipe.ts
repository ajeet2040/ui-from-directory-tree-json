import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fileSize' })
export class FileSizePipe implements PipeTransform {
    transform(value: any) {
        if (value) {
            // return value.charAt(0).toUpperCase() + value.slice(1);
            var i = Math.floor( Math.log(value) / Math.log(1024) );
            return ( value / Math.pow(1024, i) ).toFixed(2) + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
        }
        return value;
    }
}