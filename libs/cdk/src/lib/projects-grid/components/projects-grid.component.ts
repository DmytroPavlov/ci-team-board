import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.css']
})
export class ProjectsGridComponent implements OnInit {

  @Input()
  projects: Object[] = [];

  constructor() { 
  }

  private getRandomIntInclusive(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit() {
    for (let i = 0; i < this.getRandomIntInclusive(7, 111); i++) {
      this.projects.push({
        id: Math.random(),
        name: `type.scope.project-${i}`,
        status: this.getRandomIntInclusive(0, 3)
      })
    }
  }

}
