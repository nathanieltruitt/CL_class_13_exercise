import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  mySearch!: string;
  @Output() mySearchEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sendSearch() {
    this.mySearchEvent.emit(this.mySearch);
  }
}
