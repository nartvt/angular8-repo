import { Component, OnInit,ViewChildren, QueryList } from '@angular/core';
import { MoviesItemComponent } from './../movies-item/movies-item.component';
@Component({
  selector: 'app-movies-collection',
  templateUrl: './movies-collection.component.html',
  styleUrls: ['./movies-collection.component.scss']
})
export class MoviesCollectionComponent implements OnInit {

  @ViewChildren(MoviesItemComponent) tagListsItemMovie: QueryList<MoviesItemComponent>;

  danhSachPhim = [
    { maPhim: 1, tenPhim: "Minions", gia: "85000", hinhAnh: "./assets/images/minions.jpg" },
    { maPhim: 2, tenPhim: "Home", gia: "85000", hinhAnh: "./assets/images/home.jpg" },
    { maPhim: 3, tenPhim: "Harvie", gia: "85000", hinhAnh: "./assets/images/harvie.jpg" },
    { maPhim: 4, tenPhim: "Insideout", gia: "85000", hinhAnh: "./assets/images/insideout.jpg" }
  ];
  danhSachLike = [
    { maPhim: 1, tenPhim: "Minions", soLike: 0 },
    { maPhim: 2, tenPhim: "Home", soLike: 0 },
    { maPhim: 3, tenPhim: "Harvie", soLike: 0 },
    { maPhim: 4, tenPhim: "Insideout", soLike: 0 },
  ]
  constructor() { }

  ngOnInit() {
  }
  bindingLike(movie) {
    let movieFound = this.danhSachLike.find(item => {
      return item.maPhim === movie.maPhim;
    });
    movieFound.soLike++;
   /*  this.danhSachLike.forEach(item => {
      if (item.maPhim === movie.maPhim) {
        item.soLike +=1;
      }
    }); */
  }
  addMovie(movie) {
    this.danhSachPhim.push(movie);
  }
  viewChildren() {
    this.tagListsItemMovie.map(item => {
      if (item.movie.maPhim === 3) {
        item.movie.gia = 100000;
      }
    });
  }
}
