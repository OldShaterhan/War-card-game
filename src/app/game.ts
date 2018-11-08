import { Card } from './card';
import { Deck } from './deck';

export class Game {
  
  public tmp1: Card;
  public tmp2: Card;

  public tmp1A: Card[]=[];
  public tmp2A: Card[]=[];

  public round: number = 0;
  public winner: number = 0;

  public tooks: number =0 ;

  x: number = 0;

  play_continously;

  play(P1: Deck, P2: Deck) {
    this.play_continously = setInterval(() => this.play_1round(P1, P2), 2500);
  }
  
  pause() {
    clearInterval(this.play_continously);
  }

  play_1round(P1: Deck, P2: Deck) {
    this.tmp1A = [];
    this.tmp2A = [];

    if (P1._deck.length > 0 && P2._deck.length > 0) { //no winner at that moment
      this.round++;
      this.x = 0;
      this.compare(P1, P2, this.x);
    }

    else if (P1._deck.length == 0) //P2 won
    {
      this.winner = 2;
      console.log("P2 wins");
      console.log(P1, P2);
      clearInterval(this.play_continously);
    }
      
    else if (P2._deck.length == 0) //P1 won
    {
      this.winner = 1;
      console.log("P1 wins");
      console.log(P1, P2);
      clearInterval(this.play_continously);
    }

    else {
      console.log("Something went wrong... (deck length smaller than 0)");
    }
  }

  compare(P1: Deck, P2: Deck, _x: number) {
    this.tmp1A.unshift(P1._deck.pop());
    this.tmp2A.unshift(P2._deck.pop());
    
    if (this.tmp1A[0].value == this.tmp2A[0].value) { //war compare
      this.tooks = 0;
      _x += 2;
      console.log("x=",_x);
      if (_x+1 > P1._deck.length + this.tmp1A.length && _x+1 > P2._deck.length + this.tmp2A.length) { //no needed amount of cards for both players - not really possible, but checked
        if (P1._deck[0].value == P2._deck[0].value)
          this.winner = 3; //no winner
        else if (P1._deck[0].value > P2._deck[0].value)
          this.winner = 1;
        else //(P1._deck[0].value < P2._deck[0].value)
          this.winner = 2;
      }
      else if (_x+1 > P1._deck.length + this.tmp1A.length) { //if needed cards od P1 to prepare war is insufficient - no war, P2 wins
        this.winner = 2;
        return 0;
      }
      else if (_x+1 > P2._deck.length + this.tmp1A.length) { //if needed cards od P2 to prepare war is insufficient - no war, P1 wins
        this.winner = 1;
        return 0;
      }
      else {
          this.tmp1A.unshift(P1._deck.pop());
          this.tmp2A.unshift(P2._deck.pop());
        setTimeout(() => this.compare(P1, P2, _x), 1000);
      }
    }
    else if (this.tmp1A[0].value < this.tmp2A[0].value) {
      this.tooks = 2;
      this.give(P2,_x,2);
    }
    else //this.tmp1A[_x].value > this.tmp2A[_x].value
    {
      this.tooks = 1;
      this.give(P1,_x,1);
    }

  }
  
  give(Pwin: Deck, x: number, param: number) {
    if (param == 1) {
      for (let i: number = 0; i <= x; i++) {
        Pwin._deck.unshift(this.tmp1A[i]);
      }
      for (let j: number = 0; j <= x; j++) {
        Pwin._deck.unshift(this.tmp2A[j]);
      }
    }
    else {
      for (let i: number = 0; i <= x; i++) {
        Pwin._deck.unshift(this.tmp2A[i]);
      }
      for (let j: number = 0; j <= x; j++) {
        Pwin._deck.unshift(this.tmp1A[j]);
      }
    }
  }
}
