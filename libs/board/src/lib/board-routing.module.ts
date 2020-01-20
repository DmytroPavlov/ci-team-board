import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './components/';

const routes: Routes = [
  { path: '', redirectTo: '0', pathMatch: 'full' },
  { path: ':id', component: BoardComponent }
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BoardRoutingModule { }
