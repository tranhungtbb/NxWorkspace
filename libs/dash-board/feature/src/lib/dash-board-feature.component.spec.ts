import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardFeatureComponent } from './dash-board-feature.component';

describe('DashBoardFeatureComponent', () => {
  let component: DashBoardFeatureComponent;
  let fixture: ComponentFixture<DashBoardFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashBoardFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashBoardFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
