import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveredNewCasesComponent } from './recovered-new-cases.component';

describe('RecoveredNewCasesComponent', () => {
  let component: RecoveredNewCasesComponent;
  let fixture: ComponentFixture<RecoveredNewCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoveredNewCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveredNewCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
