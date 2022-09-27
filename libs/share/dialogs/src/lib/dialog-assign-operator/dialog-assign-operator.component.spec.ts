import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAssignOperatorComponent } from './dialog-assign-operator.component';

describe('DialogAssignOperatorComponent', () => {
  let component: DialogAssignOperatorComponent;
  let fixture: ComponentFixture<DialogAssignOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAssignOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAssignOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
