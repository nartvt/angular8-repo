import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-data-binding',
  templateUrl: './bai-tap-data-binding.component.html',
  styleUrls: ['./bai-tap-data-binding.component.scss']
})
export class BaiTapDataBindingComponent implements OnInit {
  email: string = "Dung [(ngModel)]";
  fullname: string = "Tran Van Tai";
  constructor() { }

  ngOnInit() {
  }
  eventBinding(data) {
    this.fullname = data;
  }
}
