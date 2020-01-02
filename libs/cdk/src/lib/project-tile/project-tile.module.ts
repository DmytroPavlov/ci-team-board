import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectTileComponent } from './components/project-tile.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
	declarations: [ProjectTileComponent],
	entryComponents: [ProjectTileComponent],
	imports: [CommonModule, MatCardModule, MatChipsModule],
	exports: [ProjectTileComponent],
	providers: [],
})
export class ProjectTileModule {}
