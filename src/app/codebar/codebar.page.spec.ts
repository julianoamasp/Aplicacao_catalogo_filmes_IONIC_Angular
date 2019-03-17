import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodebarPage } from './codebar.page';

describe('CodebarPage', () => {
  let component: CodebarPage;
  let fixture: ComponentFixture<CodebarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodebarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodebarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
