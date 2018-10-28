import { CARDVALUES } from './mock-values'
import { CARDCOLORS } from './mock-colors'
import { Card } from './card';

export class Deck {
  Deck: Card[];



  generate() {
    for (const cardcolor of CARDCOLORS) {
      for (const cardvalue of CARDVALUES) {
        let item: Card = {
          suit: cardcolor.suit,
          value: cardvalue.value,
          name: cardvalue.name
        };

        this.Deck.push(item);
      }
    }

  }

  shuffle() {

  }

  distribute() {

  }
}
