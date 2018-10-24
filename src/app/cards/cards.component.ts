import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-cards',
  //inputs: ['colour', 'id'],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  card: Card = {
    colour: 'Spade',
    id: 2
  }

  constructor() { }

  ngOnInit() {
  }

}
