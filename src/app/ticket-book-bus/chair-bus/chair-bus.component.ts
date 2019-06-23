import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chair-bus',
  templateUrl: './chair-bus.component.html',
  styleUrls: ['./chair-bus.component.scss']
})
export class ChairBusComponent implements OnInit {
  bookStatus = false;
  @Input() chair;
  @Output() isBookOut = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  booking() {
    // this.bookStatus = this.bookStatus === true ? false : true;
    this.bookStatus = !this.bookStatus;
    let objGhe = {
      bookStatus: this.bookStatus,
      chair: this.chair
    }
    this.isBookOut.emit(objGhe);
  }
}
