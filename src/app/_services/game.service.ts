import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Game } from '../_models/game';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  game: WritableSignal<Game | null> = signal<Game | null>(null);

  constructor(private http: HttpClient) { }

  getGameData(): Signal<Game | null> {
    return this.game;
  }

  setGameData() {
    this.http.get<Game>("assets/data/game-data.json").subscribe({
      next: (game) => this.game.set(game)
    })
  }
}
