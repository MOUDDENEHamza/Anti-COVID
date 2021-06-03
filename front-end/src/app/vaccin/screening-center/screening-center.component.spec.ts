import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningCenterComponent } from './screening-center.component';

describe('ScreeningCenterComponent', () => {
  let component: ScreeningCenterComponent;
  let fixture: ComponentFixture<ScreeningCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreeningCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
