import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TappointmentsComponent } from './tappointments.component';

describe('TappointmentsComponent', () => {
  let component: TappointmentsComponent;
  let fixture: ComponentFixture<TappointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TappointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
