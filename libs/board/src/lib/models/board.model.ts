export enum BoardProjectsType {
  Regex = 1
}

export class BoardProjects {
  public type = BoardProjectsType.Regex;
  public value: any;
}

export class Board {
  public id = Math.random();
  public name = '';
  public projects = new BoardProjects()
}
