import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardsValueComponent } from './cards-value/cards-value.component';
import { CardColorsComponent } from './card-colors/card-colors.component';
import { CardsStackComponent } from './cards-stack/cards-stack.component';
import { DeckComponent } from './deck/deck.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardsValueComponent,
    CardColorsComponent,
    CardsStackComponent,
    DeckComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
