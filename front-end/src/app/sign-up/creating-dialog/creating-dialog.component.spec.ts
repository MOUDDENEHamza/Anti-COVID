import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingDialogComponent } from './creating-dialog.component';

describe('CreatingDialogComponent', () => {
  let component: CreatingDialogComponent;
  let fixture: ComponentFixture<CreatingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
