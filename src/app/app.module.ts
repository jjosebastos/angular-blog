import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './pages/index/menu-title/menu-title.component';
import { BigCardComponent } from './pages/index/big-card/big-card.component';
import { SmallCardComponent } from './pages/index/small-card/small-card.component';
import { HomeComponent } from './pages/index/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { FooterComponent } from './pages/index/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    ContentComponent,
    FooterComponent,
    SideBarComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
