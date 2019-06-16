import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { BaitapThemsanphamComponent } from './baitap-themsanpham/baitap-themsanpham.component';
import { HighLightDirective } from './high-light.directive';

@NgModule({
  declarations: [
    AttributeDirectiveComponent,
    NgClassComponent,
    BaitapThemsanphamComponent,
    HighLightDirective
  ],
  exports: [
    AttributeDirectiveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AttributeDirectiveModule { }
