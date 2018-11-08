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

  constructor() { }

  ngOnInit() {
  }

}
