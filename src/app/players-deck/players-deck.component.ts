import { Component, OnInit } from '@angular/core';
import { Deck } from '../deck';
import { P1, P2 } from '../players'; //common P1, P2 for full deck and player decks

@Component({
  selector: 'app-players-deck',
  templateUrl: './players-deck.component.html',
  styleUrls: ['./players-deck.component.css']
})
export class PlayersDeckComponent implements OnInit {
  //P1 = new Deck();
  //P2 = new Deck();
  //P1: Deck;
  //P2: Deck;
  constructor() { }

  ngOnInit() {
  }

}
