import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { GameService } from '../../_services/game.service';

@Component({
  selector: 'app-scene',
  standalone: true,
  imports: [CommonModule, DialogBoxComponent],
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent {
  constructor(private gameService: GameService) { }

  nextScene() {
    this.gameService.nextScene();
  }
}
