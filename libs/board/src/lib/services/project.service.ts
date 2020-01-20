import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

import { BoardService } from './board.service';
import { JenkinsService } from './jenkins.service';
import { BoardProjectsType, Project } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private _boardService: BoardService,
    private _httpClient: HttpClient,
    private _jenkinsService: JenkinsService
  ) {}

  public getProjects(): Observable<Project[]> {
    /* return this._httpClient.get<any>('../assets/data.json').pipe(
      map(result => (result && result.projects) || [])
    );*/
    return this._jenkinsService.getJobs().pipe(
      map(jenkinJobs => {
        return jenkinJobs.map(jenkinJob => {
          const project = new Project();
          project.name = jenkinJob.name;
          project.key  = jenkinJob.name;
          return project;
        });
      })
    );
  }

  public getProjectsByBoard(boardId: number): Observable<Project[]> {
    return this._boardService.getBoard(boardId)
      .pipe(
        flatMap(board => {
          if (!board) {
             return of([]);
          }
          return this.getProjects().pipe(
            map(allProjects => {
              if (board.projects.type === BoardProjectsType.Regex) {
                const regexp = new RegExp(board.projects.value);
                return allProjects.filter(project => regexp.test(project.name));
              }
              return [];
            })
          );
        })
    );
  }
}
