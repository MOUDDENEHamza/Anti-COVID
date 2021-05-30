import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessSendingEmailComponent } from './success-sending-email.component';

describe('SuccessSendingEmailComponent', () => {
  let component: SuccessSendingEmailComponent;
  let fixture: ComponentFixture<SuccessSendingEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessSendingEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessSendingEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
