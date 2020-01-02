import { Component } from '@angular/core';

@Component({
  selector: 'ci-team-board-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ci-team-board';
  projects: object[] = [];
  constructor() {
    for (let i = 0; i < 150; i++) {
      this.projects.push({
        name: `lib.studio-free.project${i}`
      })
    }
  }
}
