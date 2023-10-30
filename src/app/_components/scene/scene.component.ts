import { Component, ViewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Scene } from '../../_models/scene';
import { GameService } from '../../_services/game.service';
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-scene',
  standalone: true,
  imports: [CommonModule, DialogBoxComponent, CharacterComponent],
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent {
  @ViewChild('character') character?: CharacterComponent;
  game = this.gameService.getGameData();
  scene: Scene | null = null;
  show: boolean = false;

  constructor(private gameService: GameService) {
    effect(() => {
      if (this.game()) {
        let currentScene = this.game()!.currentScene;
        this.scene = this.game()?.scenes.find((x) => x.id === currentScene)!;
      }
    })
  }

  showCharacter() {
    this.character?.show();
  }

  hideCharacter() {
    this.character?.hide();
  }
}
