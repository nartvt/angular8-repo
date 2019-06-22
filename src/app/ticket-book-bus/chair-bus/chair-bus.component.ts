import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-chair-bus',
  templateUrl: './chair-bus.component.html',
  styleUrls: ['./chair-bus.component.scss']
})
export class ChairBusComponent implements OnInit {
  bookStatus = false;
  @Input() chair;
  constructor() { }

  ngOnInit() {
  }
  booking() {
    this.bookStatus = true;
  }
}
