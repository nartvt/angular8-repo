import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-ngif',
  templateUrl: './baitap-ngif.component.html',
  styleUrls: ['./baitap-ngif.component.scss']
})
export class BaitapNgifComponent implements OnInit {
  statusLogin: boolean = false;
  name: string = "Login";
  constructor() { }

  ngOnInit() {
    this.verifyUserLogin();
  }
  verifyUserLogin() {
    if (localStorage.getItem("userLogin") != null) {
      this.statusLogin = true;
      this.name = JSON.parse(localStorage.getItem("userLogin"));
    }
  }
  login(_userName, _password) {
    if (_userName === "angular8" && _password === "angular8") {
      this.statusLogin = true;
      this.name = _userName;
      localStorage.setItem("userLogin", JSON.stringify(_userName));
    }
  }
}
