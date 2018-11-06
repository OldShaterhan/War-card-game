import { Component, OnInit } from '@angular/core';
import { Deck } from '../deck';
import { MainDeck } from '../main-deck';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  //deck: Deck;

  deck = new MainDeck();
  P1 = new Deck();
  P2 = new Deck();
  private shuffled = 0;
  distributed = 0;
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

  //distribute_click(P1 = new Deck(), P2 = new Deck()) {
  distribute_click(P1, P2) {
    this.deck.distribute(this.P1, this.P2);
    console.log(this.P1);
    console.log(this.P2);
    this.distributed = 1;
  }

}
