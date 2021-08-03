import { Component, Input, OnInit, Output } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.css']
})
export class BookListingComponent implements OnInit {

  books: Book[] = [];
  searchValue: string = '';

  constructor(private bookService: BookService) {
    this.bookService.getBooks().subscribe(items => {
      this.books = items;
      console.log(this.books);
    });
  }

  ngOnInit(): void {
  }

}
