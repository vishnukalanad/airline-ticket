import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search-flights',
    component: SearchFlightComponent,
  },

  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'update-booking',
    component: BookingComponent,
  },
  {
    path: 'booking',
    component: BookingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
