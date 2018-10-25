import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardColour } from '../card-colour';
import { CardValue } from '../card-value';
import { CardColoursComponent } from '../card-colours/card-colours.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  card: Card = {
    suit: "Spade",
    value: 15,
    name: "test"
  }

  constructor() { }

  ngOnInit() {
  }

}
