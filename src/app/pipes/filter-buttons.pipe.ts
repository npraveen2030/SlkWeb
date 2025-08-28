import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterButtons',
  standalone: true
})
export class FilterButtonsPipe implements PipeTransform {

  transform(items: any[] | null | undefined, searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item => 
      item.label.toLowerCase().includes(searchText)
    );
  }
}