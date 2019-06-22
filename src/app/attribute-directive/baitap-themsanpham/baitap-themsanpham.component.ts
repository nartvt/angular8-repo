import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';


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
    if (localStorage.getItem("sanPhams") != null) {
      this.sanPhams = JSON.parse(localStorage.getItem("sanPhams"));    
    }
  
  }

  getInfoSanPham(maSanPham, tenSanPham, giaSanPham) {

    const newProduct = {
      maSanPham: maSanPham,
      tenSanPham: tenSanPham,
      giaSanPham: giaSanPham
    };
    this.sanPhams.push(newProduct);
    localStorage.setItem("sanPhams", JSON.stringify(this.sanPhams));
  }
  deleteSanPham(product){
    
    console.log(product);
    let index = this.sanPhams.indexOf(element =>{
      if(element.maSanPham===product.maSanPham){
        return element;
      }
    });
    console.log(index);
    this.sanPhams.splice(index,1);
    localStorage.setItem("sanPhams", JSON.stringify(this.sanPhams));
  }
}
