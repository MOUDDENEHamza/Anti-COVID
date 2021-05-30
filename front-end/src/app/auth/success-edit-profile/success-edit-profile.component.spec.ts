import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessEditProfileComponent } from './success-edit-profile.component';

describe('SuccessEditProfileComponent', () => {
  let component: SuccessEditProfileComponent;
  let fixture: ComponentFixture<SuccessEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
