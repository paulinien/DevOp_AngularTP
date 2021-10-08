import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnimalComponent} from "./animal/animal.component";
import {ListAnimalsComponent} from "./list-animals/list-animals.component";



@NgModule({
  declarations: [
    AnimalComponent,
    ListAnimalsComponent
  ],
  exports: [
    AnimalComponent,
    ListAnimalsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AnimalsModule { }
