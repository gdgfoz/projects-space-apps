import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectArchiveComponent} from './project/project-archive/project-archive.component';
import {ProjectSingleComponent} from './project/project-single/project-single.component';

const routes: Routes = [
  {path: '', redirectTo: 'projects', pathMatch: 'full'},
  {path: 'projects', component: ProjectArchiveComponent},
  {path: 'projects/:slug', component: ProjectSingleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule {
}
