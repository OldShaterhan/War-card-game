import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatListModule, MatTreeModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardsValueComponent } from './cards-value/cards-value.component';
import { CardColorsComponent } from './card-colors/card-colors.component';
import { DeckComponent } from './deck/deck.component';
import { PlayersDeckComponent } from './players-deck/players-deck.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardsValueComponent,
    CardColorsComponent,
    DeckComponent,
    PlayersDeckComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatTreeModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
