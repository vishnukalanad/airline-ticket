import { Component, Input, OnInit } from '@angular/core';

export interface iAirport {
  name: string;
  location: string;
}

export interface iTiming {
  date: string;
  time: string;
}

export interface iFlights {
  depart_airport: iAirport;
  arrival_airport: iAirport;
  journey: 'inbound' | 'outbound';
  amount: {
    actual: number;
    gst: number;
  };
  airline: {
    name: string;
    logo: string;
  };
  departure: iTiming;
  arrival: iTiming;
  stops?: {
    airport: iAirport;
    arrival: iTiming;
    departure: iTiming;
  }[];
}

@Component({
  selector: 'app-airline-fare-card',
  templateUrl: './airline-fare-card.component.html',
  styleUrls: ['./airline-fare-card.component.scss'],
})
export class AirlineFareCardComponent implements OnInit {
  @Input() flights: iFlights[] = [];
  constructor() {}

  ngOnInit(): void {}
}
