import { Component, OnInit } from '@angular/core';
import {AnimalService} from "../animal.service";
import {Animal} from "../animal/animal.component";

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css']
})
export class ListAnimalsComponent implements OnInit {

  constructor(private animalService: AnimalService) {
  }

  ngOnInit(): void {
  }

  get animals(): Animal[]{
    return this.animalService.animals
  }

  deleteAnimal(animal: Animal) {
    this.animalService.deleteAnimal(animal)
  }

}
