import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.css']
})
export class BookFilterComponent implements OnInit, OnDestroy {

  @Output() onTyping = new EventEmitter<string>();
  @Input() value: string = '';
  debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.onTyping.emit(filter));
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
