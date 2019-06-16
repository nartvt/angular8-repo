import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructualDirectiveComponent } from './structual-directive.component';
import { NgifComponent } from './ngif/ngif.component';
import { BaitapNgifComponent } from './baitap-ngif/baitap-ngif.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [
    StructualDirectiveComponent,
    NgifComponent,
    BaitapNgifComponent,
    NgSwitchComponent,
    NgForComponent
  ],
  exports: [
    StructualDirectiveComponent,
    NgifComponent,
    BaitapNgifComponent,
    NgSwitchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StructualDirectiveModule { }
