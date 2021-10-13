import { Injectable } from '@angular/core';
import {Animal} from "./animal/animal.component";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AnimalService {

  private _animals: Animal[] = []

  constructor(private httpClient: HttpClient) {
    httpClient.get<Animal[]>('/api/animals').subscribe((animals) => this._animals=animals)
  }

  public get animals(): Animal[] {
    return this._animals
  }

  deleteAnimal(animal: Animal) {
    // this._animals = this._animals.filter(a => a.id!=animal.id)
    this.httpClient.delete(`/api/animals/${animal.id}`).subscribe()
    this.httpClient.get<Animal[]>('/api/animals').subscribe((animals) => this._animals=animals)
  }
}
