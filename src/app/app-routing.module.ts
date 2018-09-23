import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CmsModule} from './cms/cms.module';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'projects', // <== DEFAULT ROUTE
  //   pathMatch: 'full'
  // },
  {
    path: 'auth',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'cms',
    loadChildren: './cms/cms.module#CmsModule'
  },
  {
    path: '',
    loadChildren: './site/site.module#SiteModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
