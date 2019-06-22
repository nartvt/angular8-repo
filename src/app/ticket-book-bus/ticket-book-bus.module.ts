import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketBookBusComponent } from './ticket-book-bus.component';
import { ChairBusCollectionsComponent } from './chair-bus-collections/chair-bus-collections.component';
import { ChairBusComponent } from './chair-bus/chair-bus.component';

@NgModule({
  declarations: [TicketBookBusComponent, ChairBusCollectionsComponent, ChairBusComponent,],
  imports: [
    CommonModule
  ],
  exports: [
    TicketBookBusComponent,
    ChairBusComponent,
    ChairBusCollectionsComponent
  ]
})
export class TicketBookBusModule { }
