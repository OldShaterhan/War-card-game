import { Component, OnInit } from '@angular/core';
import { CARDCOLOURS } from '../mock-colours';

@Component({
  selector: 'app-card-colours',
  templateUrl: './card-colours.component.html',
  styleUrls: ['./card-colours.component.css']
})
export class CardColoursComponent implements OnInit {
    cardcolours = CARDCOLOURS;
  constructor() { }

  ngOnInit() {
    
  }

}
