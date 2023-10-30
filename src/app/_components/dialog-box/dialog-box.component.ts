import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog } from '../../_models/dialog';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
  @Input() dialogInput: Dialog[] = [];
  dialogIndex: number = 1;
  name: string = "";
  dialog: string = "";
  isWritingDialog: boolean = false;

  ngOnInit() {
    this.writeDialog();
  }
  
  writeDialog() {
    this.isWritingDialog = true;
    this.dialog = "";
    
    this.name = this.dialogInput.find(x => x.index === this.dialogIndex)!.name;
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
      this.writeDialog()
    }
  }
}
