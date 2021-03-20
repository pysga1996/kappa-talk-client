import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicRoutingModule} from './public-routing.module';
import {LoginComponent} from './login/login.component';
import {PublicComponent} from './public.component';
import {ErrorComponent} from './error/error.component';
import {AccessDeniedComponent} from './access-denied/access-denied.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, PublicComponent, ErrorComponent, AccessDeniedComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule
  ]
})
export class PublicModule {
}
