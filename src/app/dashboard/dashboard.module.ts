import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LeftSidePaneComponent } from './main/left-side-pane/left-side-pane.component';
import { RightSidePaneComponent } from './main/right-side-pane/right-side-pane.component';
import { CardComponent } from './main/right-side-pane/card/card.component';
import { MobileViewComponent } from './main/mobile-view/mobile-view.component';
import { DashboardComponent } from './dashboard.component';
@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    LeftSidePaneComponent,
    RightSidePaneComponent,
    CardComponent,
    MobileViewComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
