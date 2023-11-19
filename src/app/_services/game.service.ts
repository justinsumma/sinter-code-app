import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Game } from '../_models/game';
import { HttpClient } from '@angular/common/http';
import { Scene } from '../_models/scene';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  game: WritableSignal<Game | null> = signal<Game | null>(null);
  currentScene: WritableSignal<Scene | null> = signal<Scene | null>(null);
  private currentSceneIndex: number = 0;

  constructor(private http: HttpClient) { }

  getGameData(): Signal<Game | null> {
    return this.game;
  }

  setGameData() {
    this.http.get<Game>("assets/data/game-data.json").subscribe({
      next: (game) => {
        this.game.set(game);
        this.currentScene.set(game.scenes[this.currentSceneIndex]);
      } 
    })
  }

  getCurrentScene(): Signal<Scene | null> {
    return this.currentScene;
  }

  nextScene() {
    this.currentSceneIndex++;
    this.currentScene.set(this.game()!.scenes[this.currentSceneIndex])
  }
}
