import { Games } from '../model/game.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url:string ='http://localhost:3000/games';
  constructor(private http:HttpClient) { }
  display()
  {
    return this.http.get<Games[]>(this.url)
  }
  
}