import { CARDVALUES } from './mock-values'
import { CARDCOLORS } from './mock-colors'
import { Card } from './card';

export class Deck {
  _deck: Card[] = [];
  //deck = new Array<Card>();

  generate() {
    for (let cardcolor of CARDCOLORS) {
      for (let cardvalue of CARDVALUES) {
        let item: Card = {
          suit: cardcolor.suit,
          value: cardvalue.value,
          name: cardvalue.name
        };
        //let item = new Card;

        this._deck.push(item);
      }
    }
  }

  shuffle() { //Fisher-Yates shuffle
    var m = this._deck.length, t, i;
    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = this._deck[m];
      this._deck[m] = this._deck[i];
      this._deck[i] = t;
    }
  }

  distribute() {

  }
}
