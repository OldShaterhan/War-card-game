import { Component, OnInit } from '@angular/core';
import { CARDCOLORS } from '../mock-colors';

@Component({
  selector: 'app-card-colors',
  templateUrl: './card-colors.component.html',
  styleUrls: ['./card-colors.component.css']
})
export class CardColorsComponent implements OnInit {
    cardcolors = CARDCOLORS;
  constructor() { }

  ngOnInit() {
    
  }

}
