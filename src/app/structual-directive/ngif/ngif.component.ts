import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {
  // true: show, false: hidden
  isShow: boolean = true;
  statusLogin: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  hidden() {
    this.isShow = false;
  }
  show() {
    this.isShow = true;
  }
  logOut() {
    this.statusLogin = false;
  }
  login() {
    this.statusLogin = true;
  }
}
