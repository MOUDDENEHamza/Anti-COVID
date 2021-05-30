import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedEditProfileComponent } from './failed-edit-profile.component';

describe('FailedEditProfileComponent', () => {
  let component: FailedEditProfileComponent;
  let fixture: ComponentFixture<FailedEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
