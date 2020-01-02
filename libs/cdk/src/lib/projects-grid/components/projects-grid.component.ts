import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.css']
})
export class ProjectsGridComponent implements OnInit {

  projects: Object[] = [];

  constructor() { 
    for (let i = 0; i < 10; i++) {
      this.projects.push({
        name: `lib.studio-free.project-${i}`,
        status: this.getRandomIntInclusive(0, 3)
      })
    }
  }

  private getRandomIntInclusive(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit() {
  }

}
