import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { Project } from './../../models/project.model';
import { ProjectService } from './../../services/project.service';

@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss']
})
export class ProjectGridComponent implements OnInit {

  protected boardId: number | undefined;

  public selectedProject?: Project;

  public projects: Project[] = [];

  // tslint:disable-next-line
  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _projectService: ProjectService
  ) {}

  public ngOnInit() {
   this._activateRoute.params.subscribe(routeParams => {
    const boardId = Number(routeParams.id);
    if (this.boardId !== boardId) {
      this.boardId = boardId;
      this._projectService.getProjectsByBoard(this.boardId).subscribe(projects => this.projects = projects);
     }
   });
  }

  public selectProject(project: Project) {
    this.selectedProject = project;
    this.sidenav.open();
  }

  public close() {
    this.sidenav.close();
  }

}
