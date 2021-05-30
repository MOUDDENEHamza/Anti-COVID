import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayOverviewComponent } from './today-overview.component';

describe('TodayOverviewComponent', () => {
  let component: TodayOverviewComponent;
  let fixture: ComponentFixture<TodayOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
