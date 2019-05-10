import { RoutingModule } from './routing/routing.module';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import { GameCityComponent } from './game-city/game-city.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    GameCityComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  RoutingModule,
    RouterModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
