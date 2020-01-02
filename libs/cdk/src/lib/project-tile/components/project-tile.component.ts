import { Component, OnInit, Input } from '@angular/core';

enum ProjectTileStatus {
  succeeded,
  failed,
  canceled,
  running
};

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.css']
})
export class ProjectTileComponent implements OnInit {

  constructor() { }
  
  @Input()
  name: string = "";

  @Input()
  status: ProjectTileStatus = ProjectTileStatus.succeeded;

  classes: Object = {
    "project-tile": true,
    "succeeded": this.status === ProjectTileStatus.succeeded,
    "failed": this.status === ProjectTileStatus.failed,
    "canceled": this.status === ProjectTileStatus.canceled,
    "running": this.status === ProjectTileStatus.running
  };

  ngOnInit() {
  }

}
