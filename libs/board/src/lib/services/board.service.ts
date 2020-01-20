import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Board } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private _httpClient: HttpClient
  ) {}

  public getBoards(): Observable<Board[]> {
    return this._httpClient.get<any>('../assets/data.json').pipe(
      map(result => (result && result.boards) || [])
    );
  }

  public getBoard(boardId: number): Observable<Board|undefined> {
    return this.getBoards().pipe(
      map(boards => boards.find(board => board.id === boardId))
    );
  }
}
