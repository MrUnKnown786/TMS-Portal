import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SupportComponent } from './support/support.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { SevasComponent } from './sevas/sevas.component';
import { DarsanComponent } from './darsan/darsan.component';
import { DonationComponent } from './donation/donation.component';
import { TemplesComponent } from './temples/temples.component';
import { TempleComponent } from './temple/temple.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { DonationSuccessComponent } from './donation-success/donation-success.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'support', component:SupportComponent},
  {path:'accomodation', component:AccomodationComponent},
  {path:'sevas', component:SevasComponent},
  {path:'darshan', component:DarsanComponent},
  {path:'donation', component:DonationComponent},
  {path:'temples', component:TemplesComponent},
  {path:'temple/:id', component:TempleComponent},
  {path:'under-construction', component:UnderConstructionComponent},
  {path:'booking-confirmation', component:BookingConfirmationComponent},
  {path:'mybookings',component:MybookingsComponent},
  {path:'donationSucess',component:DonationSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
