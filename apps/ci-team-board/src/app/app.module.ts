import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule, ProjectTileModule } from '@ci-team-board/cdk';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    ProjectTileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
