import { Component, OnInit } from '@angular/core';
import { CARDCOLOURS } from '../mock-colours';

@Component({
  selector: 'app-card-colours',
  templateUrl: './card-colours.component.html',
  styleUrls: ['./card-colours.component.css']
})
export class CardColoursComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    //cardcolours = CARDCOLOURS; - without let an error occurs
    let cardcolours = CARDCOLOURS;
  }

}
