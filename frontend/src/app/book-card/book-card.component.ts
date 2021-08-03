import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() book!: Book;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.book.name);
  }


  // get book$() {
  //   return this.route.params.pipe(x => {
  //     console.log('book-card', x)
  //     return x;
  //   });
  // }

}
