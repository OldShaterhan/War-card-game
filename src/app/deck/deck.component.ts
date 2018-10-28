import { Component, OnInit } from '@angular/core';
import { Deck } from '../deck';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  //deck: Deck;

  deck = new Deck();
  constructor() { }

  ngOnInit() {
    this.deck.generate();
    console.log(this.deck);
  }

  shuffle_click() {
    this.deck.shuffle();
    console.log(this.deck);
  }

}
