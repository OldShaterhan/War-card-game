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

        this.deck.push(item);
      }
    }

  }

  shuffle() {

  }

  distribute() {

  }
}
