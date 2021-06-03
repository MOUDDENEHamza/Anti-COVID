import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineCenterComponent } from './vaccine-center.component';

describe('VaccineCenterComponent', () => {
  let component: VaccineCenterComponent;
  let fixture: ComponentFixture<VaccineCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
