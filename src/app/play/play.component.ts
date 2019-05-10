import { GameService } from '../Service/game.service';
import { HttpClient } from '@angular/common/http';
import { Games } from '../model/game.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  games: Games[];
  constructor(private http: HttpClient, private gameService: GameService) { }

  ngOnInit() {
    this.gameService.display().subscribe(info => this.games = info)
  }
}
