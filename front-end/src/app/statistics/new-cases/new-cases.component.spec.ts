import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCasesComponent } from './new-cases.component';

describe('NewCasesComponent', () => {
  let component: NewCasesComponent;
  let fixture: ComponentFixture<NewCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
