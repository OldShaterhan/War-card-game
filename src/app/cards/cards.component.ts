import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardColor } from '../card-color';
import { CardValue } from '../card-value';
import { CardColorsComponent } from '../card-colors/card-colors.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
