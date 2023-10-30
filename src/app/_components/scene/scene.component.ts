import { Component, ViewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Scene } from '../../_models/scene';
import { GameService } from '../../_services/game.service';
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-scene',
  standalone: true,
  imports: [CommonModule, DialogBoxComponent],
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent {
  game = this.gameService.getGameData();
  scene: Scene | null = null;

  constructor(private gameService: GameService) {
    effect(() => {
      if (this.game()) {
        let currentScene = this.game()!.currentScene;
        this.scene = this.game()?.scenes.find((x) => x.id === currentScene)!;
      }
    })
  }
}
