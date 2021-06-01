import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedSignUpComponent } from './failed-sign-up.component';

describe('FailedSignUpComponent', () => {
  let component: FailedSignUpComponent;
  let fixture: ComponentFixture<FailedSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
