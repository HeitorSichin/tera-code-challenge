import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './models/book';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(books: Book[], searchValue: string): Book[] {
    if (!books || !searchValue) {
      return books;
    }
    return books.filter(book =>
      book.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
