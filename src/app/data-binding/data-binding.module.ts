import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { BaiTapDataBindingComponent } from './bai-tap-data-binding/bai-tap-data-binding.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    BaiTapDataBindingComponent],
  exports: [
    DataBindingComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    BaiTapDataBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DataBindingModule { }
