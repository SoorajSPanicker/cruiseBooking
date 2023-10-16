import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { AdminlogComponent } from './adminlog/adminlog.component';
import { AdminsignComponent } from './adminsign/adminsign.component';
import { AdhomeComponent } from './adhome/adhome.component';
import { AdviewComponent } from './adview/adview.component';
import { BookingComponent } from './booking/booking.component';
import { AdbookComponent } from './adbook/adbook.component';

const routes: Routes = [{ path: 'page', component: PageComponent },
{path:'',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'home',component:HomeComponent},
{path:'view/:rtype',component:ViewComponent},
{path:'add',component:AddComponent},
{path:'edit/:rtype',component:EditComponent},
{path:'adminlogin',component:AdminlogComponent},
{path:'adminsignup',component:AdminsignComponent},
{path:'adminhome',component:AdhomeComponent},
{path:'adview/:rtype',component:AdviewComponent},
{path:'book/:rtype',component:BookingComponent},
{path:'adbook/:rtype',component:AdbookComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
