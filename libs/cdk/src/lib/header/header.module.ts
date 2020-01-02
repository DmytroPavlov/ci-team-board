import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header.component';

@NgModule({
  declarations: [HeaderComponent],
  entryComponents: [HeaderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
  providers: []
})
export class HeaderModule {}
