import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { MoviesCollectionComponent } from './movies-collection/movies-collection.component';
import { MoviesItemComponent } from './movies-item/movies-item.component';

@NgModule({
  declarations: [InteractionComponent, MoviesCollectionComponent, MoviesItemComponent],
  imports: [
    CommonModule
  ], exports: [
    InteractionComponent,
    MoviesCollectionComponent,
    MoviesItemComponent
  ]
})
export class InteractionModule { }
