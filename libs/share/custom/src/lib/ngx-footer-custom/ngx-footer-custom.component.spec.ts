import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFooterCustomComponent } from './ngx-footer-custom.component';

describe('NgxFooterCustomComponent', () => {
  let component: NgxFooterCustomComponent;
  let fixture: ComponentFixture<NgxFooterCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxFooterCustomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxFooterCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
