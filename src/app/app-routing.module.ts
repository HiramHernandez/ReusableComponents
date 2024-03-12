import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyboardsListComponent } from './pages/keyboards-list/keyboards-list.component';
import { MiceListComponent } from './pages/mice-list/mice-list.component';

const routes: Routes = [
  {
    path: 'keyboardsList',
    component: KeyboardsListComponent
  },
  {
    path: 'miceList',
    component: MiceListComponent
  },
  {
    path: '',
    redirectTo: '/keyboardsList',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
