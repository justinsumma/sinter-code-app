import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../../_models/question';
import { Answer } from '../../_models/answer';
import { GameService } from '../../_services/game.service';

// Then register the languages you need
@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {
  @Output() hideQuestionEvent = new EventEmitter();
  @Input() question: Question | null = null;
  selectedAnswer: Answer | null = null;
  audio = new Audio();
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.audio = new Audio();
    this.audio.src = "../../assets/ha-ha-ha-sukkel.mp3";
    this.audio.load();
    this.question?.options.forEach(options => {
      options.answer = decodeURIComponent(options.answer);
    })
  }

  selectAnswer(answer: Answer) {
    this.selectedAnswer = answer;
  }

  submitAnswer(answer: Answer) {
    if (answer.isCorrect) {
      this.gameService.nextScene();
      this.hideQuestionEvent.emit();
    } else {
      this.audio.play();
    }
  }
}
