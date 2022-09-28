import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCaseComponent } from './list-of-case.component';

describe('ListOfCaseComponent', () => {
  let component: ListOfCaseComponent;
  let fixture: ComponentFixture<ListOfCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfCaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListOfCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
