import { Component, OnInit,ViewChild } from '@angular/core';
import { MoviesCollectionComponent } from './movies-collection/movies-collection.component';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  @ViewChild(MoviesCollectionComponent, { static: false }) domMovieCollections: MoviesCollectionComponent;

  constructor() { }

  ngOnInit() {
  }
  insertMovie(ma, ten, gia, hinh) {
    const movie = {
      maPhim: ma,
      tenPhim: ten,
      gia: gia,
      hinhAnh: hinh
    }
    this.domMovieCollections.addMovie(movie);
  }
}
