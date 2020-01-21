import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Component, OnInit } from '@angular/core';
import { Board } from '../../models';
import { BoardService } from '../../services';
import { AddBoardDialogComponent } from '../add-board-dialog/add-board-dialog.component';
import { RemoveBoardDialogComponent } from '../remove-board-dialog/remove-board-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public boards: Board[] = [];

  public selectedBoard?: Board;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _boardService: BoardService,
    private _dialog: MatDialog,
    private _router: Router
  ) { }

  public ngOnInit() {
    this._activateRoute.params.subscribe(routeParams => {
      const boardId = Number(routeParams.id)
      this._boardService.getBoards().subscribe(boards => {
        this.boards = boards || [];
        const selectedBoard = boards.find(board => board.id === boardId);
        this.selectBoard(selectedBoard);
      });
    });
  }

  public selectBoard(board: Board | undefined) {
    this.selectedBoard = board;
    if (board) {
      this._router.navigate(['/Board/', board.id]);
    }
  }

  public addBoard() {
    const dialogRef = this._dialog.open(AddBoardDialogComponent);
    dialogRef.afterClosed().subscribe(board => {
      if (board) {
        this._boardService.add(board);
        this.selectBoard(board);
      }
    });
  }

  public removeBoard() {
    const selectedBoard = this.selectedBoard;
    if (!selectedBoard) {
      return;
    }
    const dialogRef = this._dialog.open(RemoveBoardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._boardService.remove(selectedBoard.id);
      }
    });
  }

}
