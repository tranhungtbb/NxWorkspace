import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewRepondentsComponent } from './dialog-view-repondents.component';

describe('DialogViewRepondentsComponent', () => {
  let component: DialogViewRepondentsComponent;
  let fixture: ComponentFixture<DialogViewRepondentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogViewRepondentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogViewRepondentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
