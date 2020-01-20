import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Project } from '../../models';
import { JenkinsService, JenkinJobResult } from './../../services/jenkins.service';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss']
})
export class ProjectTileComponent implements OnInit, OnDestroy {

  private _subscription?: Subscription;

  @Input()
  public project: Project = new Project();

  public classes: Object = new Object();

  constructor(private _jenkinsService: JenkinsService) {}

  public ngOnInit() {
    this._jenkinsService.getJobInfo(this.project.key).subscribe(JenkinJob => {
      const jobResult = JenkinJob && JenkinJob.result;
      this.classes = {
        "project-tile": true,
        "succeeded": jobResult === JenkinJobResult.Success,
        "failed": jobResult === JenkinJobResult.Failure,
        "canceled": jobResult === JenkinJobResult.Aborted,
        "running": !(jobResult in JenkinJobResult) && JenkinJob.building
      };
    });
    /*this._subscription = timer(0, 10000).subscribe(() => {
      
    });*/
  }

  public ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}
