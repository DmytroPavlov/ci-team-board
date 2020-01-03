import { Component, OnInit, Input } from '@angular/core';


enum ProjectTileStatus {
  succeeded,
  failed,
  canceled,
  running
};

interface Project {
  id: string;
  name: string;
  status: ProjectTileStatus;
};

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss']
})
export class ProjectTileComponent implements OnInit {

  constructor() {}

  @Input() project: Project;

  classes: Object;

  onClick() {
    console.log(this.project.id);
  }

  ngOnInit() {
    this.classes = {
      "project-tile": true,
      "succeeded": this.project.status === ProjectTileStatus.succeeded,
      "failed": this.project.status === ProjectTileStatus.failed,
      "canceled": this.project.status === ProjectTileStatus.canceled,
      "running": this.project.status === ProjectTileStatus.running
    };
  }

}
