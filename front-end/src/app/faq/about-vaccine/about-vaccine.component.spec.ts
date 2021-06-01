import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVaccineComponent } from './about-vaccine.component';

describe('AboutVaccineComponent', () => {
  let component: AboutVaccineComponent;
  let fixture: ComponentFixture<AboutVaccineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutVaccineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
