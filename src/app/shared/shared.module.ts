import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoSmComponent} from './components/logo-sm/logo-sm.component';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    // material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    LogoSmComponent
  ],
  exports: [
    LogoSmComponent,
    FlexLayoutModule,

    // material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class SharedModule {
}
