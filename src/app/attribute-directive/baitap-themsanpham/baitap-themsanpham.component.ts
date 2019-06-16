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
  }
  getInfoSanPham(maSanPham, tenSanPham, giaSanPham) {

    const newProduct = {
      maSanPham:maSanPham,
      tenSanPham:tenSanPham,
      giaSanPham:giaSanPham
    };
    this.sanPhams.push(newProduct);
  }
}
