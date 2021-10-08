import {Component, Input, OnInit} from '@angular/core';

export interface Animal {
  readonly id: number,
  readonly name: string,
  readonly species: string,
  readonly veterinarian: string,
  readonly comment: string,
  readonly email: string,
  readonly phoneNumber: string
}

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  @Input()
  public animal: Animal | null = null

  constructor() { }

  ngOnInit(): void {
  }

}
