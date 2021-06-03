import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCovidComponent } from './about-covid.component';

describe('AboutCovidComponent', () => {
  let component: AboutCovidComponent;
  let fixture: ComponentFixture<AboutCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
