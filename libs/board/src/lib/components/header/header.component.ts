import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Board } from '../../models';
import { BoardService } from '../../services';

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

}
