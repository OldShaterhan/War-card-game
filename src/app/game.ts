import { Card } from './card';
import { Deck } from './deck';

export class Game {
  
  public tmp1: Card;
  public tmp2: Card;

  public round: number = 0;
  public winner: number = 0;

  x:number  = 0;

  play(P1: Deck, P2: Deck) {
    /*while (P1._deck.length > 0 && P2._deck.length > 0) {
      setTimeout(this.take(P1, P2), 2000);
      setTimeout(this.compare(P1, P2), 2000);
      //this.compare(tmp1, tmp2, P1, P2);
      console.log(P1._deck.length);
      setTimeout(1, 1000);
    }*/
    this.round++;
    this.x = 0;
    this.compare(P1, P2, this.x);

    if (P1._deck.length == 0) //P2 won
    {
      this.winner = 2;
      console.log("P2 wins");
      console.log(P1, P2);
    }


    if (P2._deck.length == 0) //P1 won
    {
      this.winner = 1;
      console.log("P1 wins");
      console.log(P1,P2);
    }

    if (P1._deck.length > 0 && P2._deck.length > 0)
    {
      var f = setTimeout(()=>this.play(P1,P2), 2000);
    }
  }
  

  compare(P1: Deck, P2: Deck, _x: number) {
    let P1len = P1._deck.length;
    let P2len = P2._deck.length;
    this.tmp1 = P1._deck[P1len - _x - 1];
    this.tmp2 = P2._deck[P2len - _x - 1];
    console.log(P1len, P2len);
    if (P1._deck[P1len - _x - 1].value == P2._deck[P2len - _x-1].value) { //war compare
      _x += 2;
      if (_x > P1._deck.length && _x > P2._deck.length) { //no needed amount of cards for both players - really impossible, but checked
        if (P1._deck[0].value == P2._deck[0].value)
          this.winner = 3;
        else if (P1._deck[0].value > P2._deck[0].value)
          this.winner = 1;
        else (P1._deck[0].value > P2._deck[0].value)
          this.winner = 1;
      }
      else if (_x > P1._deck.length) { //if needed cards od P1 to prepare war is insufficient - no war, P2 wins
        this.winner = 2;
        return 0;
      }
      else if (_x > P2._deck.length) { //if needed cards od P2 to prepare war is insufficient - no war, P1 wins
        this.winner = 1;
          return 0;
        }
      else
      this.compare(P1, P2, _x);
    }
    else if (P1._deck[P1len - _x - 1].value < P2._deck[P2len - _x-1].value) {
      this.give(P2,P1,_x);
    }
    else //P1._deck[P1len - _x - 1].value > P2._deck[P2len - _x - 1].value.val
    {
      this.give(P1,P2,_x);
    }


  }

  give(Pwin: Deck, Plose: Deck, x: number) {
    for (let i: number = 0; i <= x; i++) {
      Pwin._deck.unshift(Pwin._deck.pop());
    }
    for (let j: number = 0; j <= x; j++) {
      Pwin._deck.unshift(Plose._deck.pop());
    }
  }

}
