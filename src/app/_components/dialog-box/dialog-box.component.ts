import { Component, ViewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog } from '../../_models/dialog';
import { Character } from '../../_models/character';
import { CharacterComponent } from '../character/character.component';
import { GameService } from '../../_services/game.service';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [CommonModule, CharacterComponent],
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
  @ViewChild('characterComponent') characterComponent?: CharacterComponent;
  dialogInput: Dialog[] = [];
  dialogIndex: number = 1;
  name: string = "";
  dialog: string = "";
  character: Character | null = null;
  isWritingDialog: boolean = false;

  constructor(private gameService: GameService) {
    effect(() => {
      if (this.gameService.currentScene()) {
        this.dialogInput = this.gameService.currentScene()!.dialogs;
        this.dialogIndex = 1;
        
        setTimeout(() => {
          this.writeDialog();
        }, 500);
      }
    })
  }
  
  writeDialog() {
    this.isWritingDialog = true;
    this.dialog = "";
    
    this.character = this.dialogInput.find(x => x.index === this.dialogIndex)!.character;
    if (this.character) {
      this.characterComponent?.show();
    }

    const charArray = this.dialogInput.find(x => x.index === this.dialogIndex)!.text.split('');
    charArray.forEach((char, index) => {
      setTimeout(() => {
        this.dialog = this.dialog + char;
        if (index === (charArray.length - 1)) {
          this.isWritingDialog = false;
        }
      }, index * 50);
    })
  }

  next() {
    if (!this.isWritingDialog && this.dialogIndex < this.dialogInput.length) {
      this.dialogIndex++;
      this.characterComponent?.hide();

      setTimeout(() => {
        this.writeDialog()
      }, 400);
    }
  }
}
