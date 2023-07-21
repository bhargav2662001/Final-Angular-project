import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpatientsComponent } from './tpatients.component';

describe('TpatientsComponent', () => {
  let component: TpatientsComponent;
  let fixture: ComponentFixture<TpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
