import { Component, OnInit } from '@angular/core';
import {AnimalService} from "../animal.service";
import {Animal} from "../animal/animal.component";

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css']
})
export class ListAnimalsComponent implements OnInit {

  public animals: Animal[] = []

  constructor(private animalService: AnimalService) {
  }

  ngOnInit(): void {
    this.animals = this.animalService.animals
  }

}
