import { Router } from '@angular/router';
import { GameService } from '../Service/game.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-city',
  templateUrl: './game-city.component.html',
  styleUrls: ['./game-city.component.css']
})
export class GameCityComponent implements OnInit {
  cardBalance:number=6000;
gameform:FormGroup;
  constructor(private build:FormBuilder,private gameService:GameService,private route:Router) { }

  ngOnInit() {
    this.gameform=this.build.group(
      {
        'name':['',[Validators.required, Validators.pattern('[a-zA-Z]+')]],
        'address':['',Validators.required],
        'amount':['',[Validators.required, Validators.pattern('[0-9]+')]]

      }
    )
  }
  BuyCard() {
    this.cardBalance=this.cardBalance-100;
        this.route.navigate(['play'])
      }
    
  }


