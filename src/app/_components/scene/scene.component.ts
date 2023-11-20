import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { GameService } from '../../_services/game.service';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-scene',
  standalone: true,
  imports: [CommonModule, QuestionComponent, DialogBoxComponent],
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent {
  scene = this.gameService.getCurrentScene();
  question: boolean = false;

  constructor(private gameService: GameService) { }

  showQuestion() {
    this.question = true;
  }
}
