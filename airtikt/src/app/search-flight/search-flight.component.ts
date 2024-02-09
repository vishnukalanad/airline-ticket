import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, of, startWith } from 'rxjs';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss'],
})
export class SearchFlightComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  count: number[] = Array.from({ length: 13 }, (_, k) => k);
  flights: FormGroup = new FormGroup({
    type: new FormControl('round', [Validators.required]),
    from: new FormControl('Mangalore (IXE)', [Validators.required]),
    to: new FormControl('Dubai (DXB)', [Validators.required]),
    depart: new FormControl('', [Validators.required]),
    return: new FormControl('', []),
    adults: new FormControl(1, []),
    children: new FormControl(0, []),
    infants: new FormControl(0, []),
    promo: new FormControl('', []),
  });
  options: string[] = [
    'New Delhi (DEL)',
    'Mumbai (BOM)',
    'Chennai (MAA)',
    'Kolkata (CCU)',
    'Bangalore (BLR)',
    'Hyderabad (HYD)',
    'Ahmedabad (AMD)',
    'Cochin (COK)',
    'Thiruvananthapuram (TRV)',
    'Goa (GOI)',
    'Jaipur (JAI)',
    'Lucknow (LKO)',
    'Amritsar (ATQ)',
    'Varanasi (VNS)',
    'Dubai (DXB)',
    'Abu Dhabi (AUH)',
    'Doha (DOH)',
    'Muscat (MCT)',
    'Colombo (CMB)',
    'Kathmandu (KTM)',
    'Male (MLE)',
    'Istanbul (IST)',
    'Karachi (KHI)',
    'Lahore (LHE)',
    'Islamabad (ISB)',
    'Jeddah (JED)',
    'Riyadh (RUH)',
    'Amman (AMM)',
    'Cairo (CAI)',
    'Istanbul (SAW)',
    'Tehran (IKA)',
    'Baghdad (BGW)',
    'Beirut (BEY)',
    'Kuwait City (KWI)',
    'Manama (BAH)',
    'Dammam (DMM)',
    'Sharjah (SHJ)',
    'Izmir (ADB)',
    'Mashhad (MHD)',
    'Shiraz (SYZ)',
    'Baku (GYD)',
    'Tashkent (TAS)',
    'Almaty (ALA)',
    'Ashgabat (ASB)',
    'Mangalore (IXE)',
    // Add more airports as needed
  ];

  filteredOptions: Observable<string[]>;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(this.count);
  }

  ngAfterViewInit(): void {
    const icons: string[] = [
      'military_tech',
      'elderly',
      'elderly_woman',
      'school',
    ];
    const elem = this.element.nativeElement.querySelector('.label-icon');

    setInterval(() => {
      icons.forEach((icon, i) => {
        setTimeout(() => {
          elem.textContent = icon;
        }, i * 1000);
      });
    }, 4000);
  }

  ngAfterViewChecked(): void {
    // elem.textContent = 'elderly';
  }

  ngOnInit(): void {
    this.mapAirports(['from', 'to']);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  clearFiltered(control: string[]) {
    this.mapAirports(control);
  }

  private mapAirports(controls: string[]) {
    console.log(controls);

    controls.forEach((control) => {
      this.filteredOptions = this.flights.get(control).valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value || ''))
      );
    });
  }
}
