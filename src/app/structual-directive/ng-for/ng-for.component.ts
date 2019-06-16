import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  public DSNV: any = [
    { ten: "Nguyen", tuoi: 14 },
    { ten: "Nhan", tuoi: 9 },
    { ten: "Tram", tuoi: 3 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
