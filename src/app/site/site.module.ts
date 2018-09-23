import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { ProjectArchiveComponent } from './project/project-archive/project-archive.component';
import { ProjectSingleComponent } from './project/project-single/project-single.component';
import {SharedModule} from '../shared/shared.module';
import {MatListModule, MatMenuModule} from '@angular/material';
import { CardProjectComponent } from './project/card-project/card-project.component';

@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule,
    SharedModule,

    MatMenuModule,
    MatListModule
  ],
  declarations: [ProjectArchiveComponent, ProjectSingleComponent, CardProjectComponent]
})
export class SiteModule { }
