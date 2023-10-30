import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { GameService } from './_services/game.service';
import { Game } from './_models/game';
import { SceneComponent } from './_components/scene/scene.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SceneComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.setGameData();
  }
}
