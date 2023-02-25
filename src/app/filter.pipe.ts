import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(product: any[] | undefined, searchTerm: string): any[] | undefined {
    if (!product || !searchTerm) {
      return product;
    }

    searchTerm = searchTerm.toLowerCase();

    return product.filter(product => {
      return product.nom.toLowerCase().includes(searchTerm);
    });
  }
}