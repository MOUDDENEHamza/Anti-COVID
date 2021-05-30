import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedSendingEmailComponent } from './failed-sending-email.component';

describe('FailedSendingEmailComponent', () => {
  let component: FailedSendingEmailComponent;
  let fixture: ComponentFixture<FailedSendingEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedSendingEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedSendingEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
