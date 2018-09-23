import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectEditComponent} from './project-edit/project-edit.component';

const routes: Routes = [
  // {path: '', redirectTo: 'projects', pathMatch: 'full'},
  {path: 'novo-projeto', component: ProjectEditComponent},
  {path: 'project/:slug', component: ProjectEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
