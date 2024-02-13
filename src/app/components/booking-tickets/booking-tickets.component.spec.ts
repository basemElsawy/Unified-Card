import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTicketsComponent } from './booking-tickets.component';

describe('BookingTicketsComponent', () => {
  let component: BookingTicketsComponent;
  let fixture: ComponentFixture<BookingTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingTicketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
