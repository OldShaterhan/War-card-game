import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardsValueComponent } from './cards-value/cards-value.component';
import { CardColoursComponent } from './card-colours/card-colours.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardsValueComponent,
    CardColoursComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
