import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogClientResponseComponent } from './dialog-client-response.component';

describe('DialogClientResponseComponent', () => {
  let component: DialogClientResponseComponent;
  let fixture: ComponentFixture<DialogClientResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogClientResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogClientResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
