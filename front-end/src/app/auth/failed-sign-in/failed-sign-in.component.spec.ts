import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedSignInComponent } from './failed-sign-in.component';

describe('FailedSignInComponent', () => {
  let component: FailedSignInComponent;
  let fixture: ComponentFixture<FailedSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
