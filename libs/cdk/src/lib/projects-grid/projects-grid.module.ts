import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectsGridComponent } from './components/projects-grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProjectTileModule } from '../project-tile/project-tile.module'

@NgModule({
  declarations: [ProjectsGridComponent],
  entryComponents: [ProjectsGridComponent],
  imports: [CommonModule, MatGridListModule, ProjectTileModule],
  exports: [ProjectsGridComponent],
  providers: []
})
export class ProjectsGridModule {}
