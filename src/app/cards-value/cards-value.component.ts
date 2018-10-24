import { Component, OnInit } from '@angular/core';
import { CARDVALUES } from '../mock-values';

@Component({
  selector: 'app-cards-value',
  templateUrl: './cards-value.component.html',
  styleUrls: ['./cards-value.component.css']
})
export class CardsValueComponent implements OnInit {
  cardvalues = CARDVALUES;
  constructor() { }

  ngOnInit() {
  }

}
