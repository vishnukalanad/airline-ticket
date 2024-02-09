import { Component } from '@angular/core';
import { iFlights } from '../airline-fare-card/airline-fare-card.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  public flights: iFlights[] = [
    {
      airline: {
        name: 'Indigo',
        logo: 'assets/airlines/indigo-vector-logo-2022.svg',
      },
      depart_airport: {
        name: 'Mangalore International Airport (IXE)',
        location: 'Karnataka, India',
      },
      arrival_airport: {
        name: 'Dubai International Airport (DXB)',
        location: 'Dubai, UAE',
      },
      journey: 'outbound',
      amount: {
        actual: 29500,
        gst: 10,
      },
      departure: {
        date: '02/12/2024',
        time: '17:50',
      },
      arrival: {
        date: '02/12/2024',
        time: '20:30',
      },
    },
    {
      airline: {
        name: 'Air India Express',
        logo: 'assets/airlines/air-india-express-logo-brandlogos.net_txucz8rmt.svg',
      },
      depart_airport: {
        name: 'Mangalore International Airport (IXE)',
        location: 'Karnataka, India',
      },
      arrival_airport: {
        name: 'Dubai International Airport (DXB)',
        location: 'Dubai, UAE',
      },
      journey: 'outbound',
      amount: {
        actual: 34500,
        gst: 10,
      },
      departure: {
        date: '02/12/2024',
        time: '18:20',
      },
      arrival: {
        date: '02/12/2024',
        time: '21:10',
      },
    },

    {
      airline: {
        name: 'Air India ',
        logo: 'assets/airlines/air-india-logo-brandlogos.net_6nh5ga39v.svg',
      },
      depart_airport: {
        name: 'Mangalore International Airport (IXE)',
        location: 'Karnataka, India',
      },
      arrival_airport: {
        name: 'Dubai International Airport (DXB)',
        location: 'Dubai, UAE',
      },
      journey: 'outbound',
      amount: {
        actual: 39500,
        gst: 10,
      },
      departure: {
        date: '02/12/2024',
        time: '01:50',
      },
      arrival: {
        date: '02/12/2024',
        time: '09:30',
      },
      stops: [
        {
          airport: {
            name: 'Cochin International Airport (COK)',
            location: 'Kerala, India',
          },
          arrival: {
            date: '02/12/2024',
            time: '02:20',
          },
          departure: {
            date: '02/12/2024',
            time: '05:20',
          },
        },
      ],
    },
  ];
  constructor() {}
}
