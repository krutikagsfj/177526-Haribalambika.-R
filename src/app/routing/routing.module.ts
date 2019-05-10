import { RouterModule } from '@angular/router';
import { PlayComponent } from './../play/play.component';
import { GameCityComponent } from './../game-city/game-city.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export const routes: Routes = [
  {
    path: '',
    component: GameCityComponent,
    pathMatch: 'full'
  },
  {
    path: 'play',
    component: PlayComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}
  
