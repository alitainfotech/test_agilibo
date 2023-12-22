import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardInterface } from './card/card.component';
import { AppService } from './../../../app.service';

@Component({
  selector: 'app-right-side-pane',
  templateUrl: './right-side-pane.component.html',
  styleUrls: ['./right-side-pane.component.css']
})
export class RightSidePaneComponent {
  constructor(private _appService: AppService) { }
  cardData: CardInterface[] = this._appService.cardData
  tabsData = this._appService.tabsData
  tabsOffset = '0px';
  tabWidth = 200;
  @ViewChild('tabsWrapper') tabsWrapper!: ElementRef;
  scrollTabs(direction: 'left' | 'right') {
    const containerWidth = this.tabsWrapper.nativeElement.offsetWidth;
    const tabsContainerWidth = this.tabsWrapper.nativeElement.scrollWidth;
    if (direction === 'left' && parseInt(this.tabsOffset) < 0) {
      this.tabsOffset = `${parseInt(this.tabsOffset) + this.tabWidth}px`;
    } else if (direction === 'right' && tabsContainerWidth - containerWidth > Math.abs(parseInt(this.tabsOffset))) {
      this.tabsOffset = `${parseInt(this.tabsOffset) - this.tabWidth}px`;
    }
  }
}
