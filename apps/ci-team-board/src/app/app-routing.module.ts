import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'Board',
		pathMatch: 'full'
	},
	{
		path: 'Board',
		loadChildren: () => import('@ci-team-board/board').then(m => m.BoardModule)
	}
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
