import { CardColoursComponent } from "./card-colours/card-colours.component";
import { CardsValueComponent } from "./cards-value/cards-value.component";
import { CardColour } from "./card-colour";
import { CardValue } from "./card-value";

export class Card implements CardColour, CardValue{
  suit: string;
  value: number;
  name: string;
}
