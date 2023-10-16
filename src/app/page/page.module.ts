import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { AdminlogComponent } from './adminlog/adminlog.component';
import { AdminsignComponent } from './adminsign/adminsign.component';
import { AdhomeComponent } from './adhome/adhome.component';
import { AdviewComponent } from './adview/adview.component';
import { BookingComponent } from './booking/booking.component';
import { AdbookComponent } from './adbook/adbook.component';


@NgModule({
  declarations: [
    PageComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ViewComponent,
    AddComponent,
    EditComponent,
    AdminlogComponent,
    AdminsignComponent,
    AdhomeComponent,
    AdviewComponent,
    BookingComponent,
    AdbookComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PageModule { }
