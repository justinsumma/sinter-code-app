import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../../_models/question';
import { Answer } from '../../_models/answer';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  @Input() question: Question | null = null;
  selectedAnswer: Answer | null = null;

  constructor() {}

  selectAnswer(answer: Answer) {
    this.selectedAnswer = answer;
  }
}
