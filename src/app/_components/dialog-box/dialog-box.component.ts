import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
  @Input() dialogInput: string[] = [];
  dialogIndex: number = 1;
  dialog: string = "";
  isWritingDialog: boolean = false;

  ngOnInit() {
    this.writeDialog();
  }
  
  writeDialog() {
    this.isWritingDialog = true;
    this.dialog = "";
    const charArray = this.dialogInput[this.dialogIndex - 1].split('');
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
