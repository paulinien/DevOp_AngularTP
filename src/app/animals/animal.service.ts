import { Injectable } from '@angular/core';
import {Animal} from "./animal/animal.component";

@Injectable({
  providedIn: 'root'
})

export class AnimalService {

  private _animals = {
    "animals": [
      {
        "id": 1,
        "name": "Idéfix",
        "species": "dog",
        "veterinarian": "Panoramix D'Armorique",
        "comment": "Développe une allergie à la potion magique.",
        "email": "test1@gmail.com",
        "phoneNumber": "06.12.34.56.78"
      },
      {
        "id": 2,
        "name": "Chatbus",
        "species": "cat",
        "veterinarian": "Ged Épervier",
        "comment": "Faire prendre rdv 1 mois au moins en avance afin de pouvoir réserver le hangar du mécaniste voisin.",
        "email": "test2@gmail.com",
        "phoneNumber": "06.12.34.56.79"
      },
      {
        "id": 3,
        "name": "Teto",
        "species": "fox-squirrel",
        "veterinarian": "Ged Épervier",
        "comment": "Très agité.",
        "email": "test3@gmail.com",
        "phoneNumber": "06.12.34.56.80"
      }
    ],
    "veterinarians": [
      {
        "id": 1,
        "firstName": "Panoramix",
        "lastName": "D'Armorique"
      },
      {
        "id": 2,
        "firstName": "Ged",
        "lastName": "Épervier"
      }
    ]
  }

  constructor() { }

  public get animals(): Animal[] {
    return this._animals.animals
  }

  public count(): number {
    return this._animals.animals.length
  }
}
