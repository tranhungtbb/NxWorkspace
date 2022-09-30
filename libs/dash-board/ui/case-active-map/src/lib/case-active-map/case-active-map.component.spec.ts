import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseActiveMapComponent } from './case-active-map.component';

describe('CaseActiveMapComponent', () => {
  let component: CaseActiveMapComponent;
  let fixture: ComponentFixture<CaseActiveMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseActiveMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseActiveMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
