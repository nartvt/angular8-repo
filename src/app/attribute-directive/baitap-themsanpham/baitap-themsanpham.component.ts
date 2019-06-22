import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-themsanpham',
  templateUrl: './baitap-themsanpham.component.html',
  styleUrls: ['./baitap-themsanpham.component.scss']
})
export class BaitapThemsanphamComponent implements OnInit {

  public sanPhams: any = [];
  constructor() { }

  ngOnInit() {
    this.isExistsLocalStorage();
  }
  isExistsLocalStorage() {
    if (localStorage.getItem("sanphams") != null) {
      this.sanPhams = JSON.stringify(localStorage.getItem('sanphams'));
    }
    this.simulatorProducts();
  }
  getInfoSanPham(maSanPham, tenSanPham, giaSanPham) {

    const newProduct = this.product(maSanPham, tenSanPham, giaSanPham);
    this.sanPhams.push(newProduct);
    localStorage.setItem("sanphams", this.sanPhams);
  }
  product(maSanPham, tenSanPham, giaSanPham) {
    return {
      maSanPham: maSanPham,
      tenSanPham: tenSanPham,
      giaSanPham: giaSanPham
    };
  }
  simulatorProducts() {    
    for (let i = 1; i <= 100; i++) {
      let ma = "SPX" +i;
      let ten = "Product " + i;
      let gia = 100000;
      let  sp = this.product(ma, ten, gia);
      this.sanPhams.push(sp);
    }
  }
}
