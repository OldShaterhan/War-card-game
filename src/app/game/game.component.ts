import { Component, OnInit, Input } from '@angular/core';
import { Deck } from '../deck';
import { Game } from '../game';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() P1: Deck;
  @Input() P2: Deck;

  game = new Game();

  playclicked = false;
  play_cont = false;

  constructor() {

  }

  ngOnInit() {
  }
  
  play_click() {
    this.playclicked = true;
    this.play_cont = true;
    this.game.play(this.P1, this.P2);

    console.log(this.playclicked, this.play_cont);
    //setInterval(() => this.game.play_1round(this.P1, this.P2), 2000);
  }

  pause_click() {
    this.play_cont = false;
    this.game.pause();
  }

  play_1_round_click() {
    this.playclicked = true;
    this.game.play_1round(this.P1, this.P2);
  }

}
