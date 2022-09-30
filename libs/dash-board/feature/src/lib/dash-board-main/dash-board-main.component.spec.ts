import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardMainComponent } from './dash-board-main.component';

describe('DashBoardMainComponent', () => {
  let component: DashBoardMainComponent;
  let fixture: ComponentFixture<DashBoardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashBoardMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashBoardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
