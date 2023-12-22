import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { CardInterface } from '../right-side-pane/card/card.component';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.css',
    '../right-side-pane/right-side-pane.component.css']
})
export class MobileViewComponent {
  constructor(private _appService: AppService) { }
  cardData: CardInterface[] = this._appService.cardData
  tabsData = this._appService.tabsData
  tabs: string[] = ['Overview', 'Charts', 'Feedback', 'Search']
  tabsOffset = '0px';
  tabWidth = 50;
  selectedTab: string = this.tabs[0]
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
  date: Date[] = [new Date(2023, 1, 5, 15, 20), new Date(2023, 6, 5, 22, 30)]

}
