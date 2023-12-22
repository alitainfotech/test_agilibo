import { Component, Input } from '@angular/core';
export interface CardInterface {
  id: string,
  title: string,
  team: string,
  profileImage: string,
  backdropImage: string,
  secondaryTitle: string,
  description: string,
  type: 'disappointed' | 'veryHappy' | 'positive'
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ["./card.component.css"]
})
export class CardComponent {
  @Input() cardData!: CardInterface
}
