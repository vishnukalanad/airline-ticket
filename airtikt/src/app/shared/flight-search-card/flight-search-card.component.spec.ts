import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchCardComponent } from './flight-search-card.component';

describe('FlightSearchCardComponent', () => {
  let component: FlightSearchCardComponent;
  let fixture: ComponentFixture<FlightSearchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightSearchCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
