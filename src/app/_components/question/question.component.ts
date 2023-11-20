import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../../_models/question';
import { Answer } from '../../_models/answer';
import { GameService } from '../../_services/game.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  @Output() hideQuestionEvent = new EventEmitter();
  @Input() question: Question | null = null;
  selectedAnswer: Answer | null = null;

  constructor(private gameService: GameService) {}

  selectAnswer(answer: Answer) {
    this.selectedAnswer = answer;
  }

  submitAnswer(answer: Answer) {
    if (answer.isCorrect) {
      this.gameService.nextScene();
      this.hideQuestionEvent.emit();
    } else {
      console.log('Sukkel');
    }
  }
}
