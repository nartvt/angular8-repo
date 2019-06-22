import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss']
})
export class MoviesItemComponent implements OnInit {
  @Input() movie;
  @Output() eventLike = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  like() {
    // console.log(this.movie);
    this.eventLike.emit(this.movie);
}
}
