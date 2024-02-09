import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineFareCardComponent } from './airline-fare-card.component';

describe('AirlineFareCardComponent', () => {
  let component: AirlineFareCardComponent;
  let fixture: ComponentFixture<AirlineFareCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlineFareCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirlineFareCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
