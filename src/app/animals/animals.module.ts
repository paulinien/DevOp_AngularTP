import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnimalComponent} from "./animal/animal.component";
import {ListAnimalsComponent} from "./list-animals/list-animals.component";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";



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
    CommonModule,
    MatButtonModule,
    SharedModule,
    HttpClientModule
  ]
})
export class AnimalsModule { }
