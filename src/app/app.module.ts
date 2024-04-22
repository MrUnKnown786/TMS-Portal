import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SupportComponent } from './support/support.component';
import { DarsanComponent } from './darsan/darsan.component';
import { SevasComponent } from './sevas/sevas.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { DonationComponent } from './donation/donation.component';
import { TemplesComponent } from './temples/temples.component';
import { TempleComponent } from './temple/temple.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { DonationSuccessComponent } from './donation-success/donation-success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SupportComponent,
    DarsanComponent,
    SevasComponent,
    AccomodationComponent,
    DonationComponent,
    TemplesComponent,
    TempleComponent,
    BookingConfirmationComponent,
    UnderConstructionComponent,
    MybookingsComponent,
    BookingDetailsComponent,
    DonationSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
