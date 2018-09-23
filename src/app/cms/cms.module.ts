import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import {SharedModule} from '../shared';
import {MatListModule, MatSelectModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

    MatListModule,
    MatSelectModule,
  ],
  declarations: [ProjectEditComponent]
})
export class CmsModule { }
