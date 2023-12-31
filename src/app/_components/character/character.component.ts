import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Character } from '../../_models/character';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  animations: [
    trigger('slideIn', [
      state('void', style({ transform: 'translateX(-100%)' })),
      state('*', style({ transform: 'translateX(0)' })),
      transition('void => *', animate('500ms ease-in')),
      transition('* => void', animate('500ms ease-out')),
    ]),
  ],
})
export class CharacterComponent {
  @Input() character: Character | null = null;
  isShown: boolean = false;

  show() {
    this.isShown = true;
  }

  hide() {
    this.isShown = false;
  }
}
