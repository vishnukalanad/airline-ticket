import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { PaymentComponent } from './payment/payment.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    SearchFlightComponent,
    PaymentComponent,
    UpdateBookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
