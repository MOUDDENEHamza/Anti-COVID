import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDeleteAccountComponent } from './success-delete-account.component';

describe('SuccessDeleteAccountComponent', () => {
  let component: SuccessDeleteAccountComponent;
  let fixture: ComponentFixture<SuccessDeleteAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessDeleteAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessDeleteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
