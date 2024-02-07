import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FlightSearchCardComponent } from './flight-search-card/flight-search-card.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NavbarComponent, FlightSearchCardComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [NavbarComponent, FlightSearchCardComponent],
})
export class SharedModule {}
