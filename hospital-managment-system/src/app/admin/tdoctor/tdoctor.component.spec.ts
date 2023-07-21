import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdoctorComponent } from './tdoctor.component';

describe('TdoctorComponent', () => {
  let component: TdoctorComponent;
  let fixture: ComponentFixture<TdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
