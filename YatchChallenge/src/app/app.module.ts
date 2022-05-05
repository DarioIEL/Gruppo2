import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TutteComponent } from './tutte/tutte.component';
import { InOffertaComponent } from './in-offerta/in-offerta.component';
import { MioNoleggioComponent } from './mio-noleggio/mio-noleggio.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { OfferteComponent } from './home/offerte/offerte.component';
import { ChatComponent } from './home/chat/chat.component';
import { AcquistoComponent } from './acquisto/acquisto.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    TutteComponent,
    InOffertaComponent,
    MioNoleggioComponent,
    LoginComponent,
    CarouselComponent,
    OfferteComponent,
    ChatComponent,
    AcquistoComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
