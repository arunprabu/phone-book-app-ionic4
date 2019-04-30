import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalPage } from './edit-modal.page';

describe('EditModalPage', () => {
  let component: EditModalPage;
  let fixture: ComponentFixture<EditModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
