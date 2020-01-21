import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MomentModule } from 'ngx-moment';
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { GravatarModule } from 'ngx-gravatar';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';

import { BoardRoutingModule } from './board-routing.module';
import {
  BoardComponent,
  HeaderComponent,
  ProjectGridComponent,
  ProjectTileComponent,
  ProjectDetailsComponent
} from './components/';

@NgModule({
  declarations: [
    BoardComponent,
    HeaderComponent,
    ProjectGridComponent,
    ProjectTileComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MomentModule,
    MatStepperModule,
    MatChipsModule,
    MatTabsModule,
    MatListModule,
    MatBadgeModule,
    GravatarModule,
    MatTableModule,
    MatSelectModule,
    MatTooltipModule
  ],
  exports: [ProjectGridComponent],
  providers: []
})
export class BoardModule {}
