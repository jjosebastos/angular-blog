import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { HomeComponent } from './home/home.component';
import { BigCardComponent } from './big-card/big-card.component';
import { FooterComponent } from './footer/footer.component';
import { MenuTitleComponent  } from './menu-title/menu-title.component';
import { SmallCardComponent } from './small-card/small-card.component';
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgModule,
    BigCardComponent,
    FooterComponent,
    MenuTitleComponent,
    SmallCardComponent,

  ],
  exports: [
    HomeComponent,
    BigCardComponent,
    FooterComponent,
    MenuTitleComponent,
    SmallCardComponent
  ]
})
export class HomeModule { }
