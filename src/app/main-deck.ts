import { Card } from './card';
import { CARDVALUES } from './mock-values';
import { CARDCOLORS } from './mock-colors';
import { Deck } from './deck';

export class MainDeck extends Deck{

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

  //  distribute(P1, P2) {
  distribute(P1: Deck, P2: Deck) {
    let tmp: Card;
    while (this._deck.length > 0) {
      tmp = this._deck.pop();
      P1._deck.push(tmp);
      tmp = this._deck.pop();
      P2._deck.push(tmp);
    }
  }
}
