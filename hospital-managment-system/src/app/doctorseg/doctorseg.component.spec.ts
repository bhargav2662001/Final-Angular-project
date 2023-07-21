import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsegComponent } from './doctorseg.component';

describe('DoctorsegComponent', () => {
  let component: DoctorsegComponent;
  let fixture: ComponentFixture<DoctorsegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
