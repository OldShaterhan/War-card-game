import { Component, OnInit } from '@angular/core';
import { Deck } from '../deck';
import { P1, P2 } from '../players'; //common P1, P2 for full deck and player decks

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  //deck: Deck;

  deck = new Deck();
  shuffled = 0;
  constructor() { }
  //constructor(private P1, P2) { }

  ngOnInit() {
    this.deck.generate();
    console.log(this.deck);
  }

  shuffle_click() {
    this.deck.shuffle();
    console.log(this.deck);
    this.shuffled = 1;
  }


  distribute_click(P1, P2) {
  //distribute_click(P1: PlayersDeckComponent["P1"], P2: PlayersDeckComponent["P2"]) {
  //distribute_click(P1, P2) {
    this.deck.distribute(P1, P2);
    console.log(P1);
    console.log(P2);
  }

}
