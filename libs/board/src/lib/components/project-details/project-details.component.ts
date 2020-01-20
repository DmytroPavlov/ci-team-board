import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models';
import { ProjectRun, JenkinsService, ProjectRunNode } from './../../services/jenkins.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {
  private _project: Project = new Project();
  get project(): Project {
    return this._project;
  }
  @Input()
  set project(value: Project) {
    this._project = value;
    this._projectRuns = this._jenkinsService.getJobRuns(this.project.key);
  }


  private _projectRuns: Observable<ProjectRun> = new Observable<ProjectRun>();
  private _projectRunNodes: Observable<ProjectRunNode> = new Observable<ProjectRunNode>();

  constructor(private _jenkinsService: JenkinsService) {}

  onProjectRunDetailsOpened(projectRun: ProjectRun) {
    this._projectRunNodes = this._jenkinsService.getJobRunNodes(this._project.key, projectRun.id);
  }

}
