import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectTileComponent } from './components/project-tile.component';

@NgModule({
	declarations: [ProjectTileComponent],
	entryComponents: [ProjectTileComponent],
	imports: [CommonModule],
	exports: [ProjectTileComponent],
	providers: [],
})
export class ProjectTileModule {}
