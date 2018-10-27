import { CardColorsComponent } from "./card-colors/card-colors.component";
import { CardsValueComponent } from "./cards-value/cards-value.component";
import { CardColor } from "./card-color";
import { CardValue } from "./card-value";

export interface Card extends CardColor, CardValue {
}
