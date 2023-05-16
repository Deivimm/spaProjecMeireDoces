/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DocesComponent } from './doces.component';

describe('DocesComponent', () => {
  let component: DocesComponent;
  let fixture: ComponentFixture<DocesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
