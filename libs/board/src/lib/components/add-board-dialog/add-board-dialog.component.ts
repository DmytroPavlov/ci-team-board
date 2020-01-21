import { Board } from './../../models/';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-board-dialog',
  templateUrl: './add-board-dialog.component.html',
  styleUrls: ['./add-board-dialog.component.scss']
})
export class AddBoardDialogComponent implements OnInit {

  public board = new Board();

  public nameFormControl = new FormControl('', [
    Validators.required
  ]);

  public regexFormControl = new FormControl();

  constructor(
    private _dialogRef: MatDialogRef<AddBoardDialogComponent>
  ) { }

  ngOnInit() {
    this.board.id = Math.floor(Math.random() * (100 - 10) + 10);
  }

  public add() {
    if (this.nameFormControl.invalid) {
      this.nameFormControl.markAsTouched();
      return;
    }
    this.board.name = this.nameFormControl.value;
    this.board.projects.value = this.regexFormControl.value;
    this._dialogRef.close(this.board);
  }

}
