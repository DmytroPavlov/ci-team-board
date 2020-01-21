import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Board } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private _strageKey = "ci-team-board";

  constructor(
    private _httpClient: HttpClient
  ) {}

  private _getBoardsFromData(): Observable<Board[]> {
    return this._httpClient.get<any>('../assets/data.json').pipe(
      map(result => (result && result.boards) || [])
    );
  }

  private _getBoardsFromStorage(): Board[] {
    return JSON.parse(localStorage.getItem(this._strageKey) || "null");
  }

  private _setBoardsFromStorage(boards: Board[]) {
    localStorage.setItem(this._strageKey, JSON.stringify(boards));
  }

  public add(board: Board) {
    this.getBoards().subscribe(boards => {
      boards.push(board);
      this._setBoardsFromStorage(boards);
    });
  }

  public remove(boardId: number) {
    this.getBoards().subscribe(boards => {
      boards = boards.filter(board => board.id !== boardId);
      this._setBoardsFromStorage(boards);
    });
  }

  public getBoards(): Observable<Board[]> {
    const boards = this._getBoardsFromStorage();
    if (boards) {
      return of(boards);
    }
    return this._getBoardsFromData();
  }

  public getBoard(boardId: number): Observable<Board|undefined> {
    return this.getBoards().pipe(
      map(boards => boards.find(board => board.id === boardId))
    );
  }
}
