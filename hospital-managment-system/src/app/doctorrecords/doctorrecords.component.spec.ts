import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorrecordsComponent } from './doctorrecords.component';

describe('DoctorrecordsComponent', () => {
  let component: DoctorrecordsComponent;
  let fixture: ComponentFixture<DoctorrecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorrecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
