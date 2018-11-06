import { Component, OnInit, Input } from '@angular/core';
import { Deck } from '../deck';

@Component({
  selector: 'app-players-deck',
  templateUrl: './players-deck.component.html',
  styleUrls: ['./players-deck.component.css']
})
export class PlayersDeckComponent implements OnInit {
  @Input() P1: Deck;
  @Input() P2: Deck;

  displayedColumns: string[] = ['name', 'suit'];
  //P1 = new Deck();
  //P2 = new Deck();
  //P1: Deck;
  //P2: Deck;
  constructor() { }

  ngOnInit() {
  }

}
