import { Component, OnInit, Input } from '@angular/core';
import { Deck } from '../deck';
import { Card } from '../card';
import { Game } from '../game';

@Component({
  selector: 'app-players-deck',
  templateUrl: './players-deck.component.html',
  styleUrls: ['./players-deck.component.css']
})
export class PlayersDeckComponent implements OnInit {
  @Input() P1: Deck;
  @Input() P2: Deck;
  @Input() distributed: boolean;

  displayedColumns: string[] = ['name', 'suit'];
  //P1 = new Deck();
  //P2 = new Deck();
  //P1: Deck;
  //P2: Deck;
  game = new Game();

  playclicked = 0;

  constructor() { }

  ngOnInit() {
  }


  play_click() {
    this.playclicked = 1;
    let tmp: Card;
    while (this.P1._deck.length > 0 && this.P2._deck.length > 0) {
      tmp=this.P1._deck.pop();
      this.P2._deck.push(tmp);
      console.log(this.P1._deck.length);
      setTimeout(1,1000);
    }

    if (this.P1._deck.length == 0) //P2 won
    {
      console.log(this.P2._deck.length);
    }


    if (this.P2._deck.length == 0) //P1 won
    {

      console.log(this.P1._deck.length);
    }
  }
}
