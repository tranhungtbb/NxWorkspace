import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOnlyComponent } from './map-only.component';

describe('MapOnlyComponent', () => {
  let component: MapOnlyComponent;
  let fixture: ComponentFixture<MapOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapOnlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MapOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
