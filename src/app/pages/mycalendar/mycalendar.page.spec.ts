import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycalendarPage } from './mycalendar.page';

describe('MycalendarPage', () => {
  let component: MycalendarPage;
  let fixture: ComponentFixture<MycalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycalendarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
