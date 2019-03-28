import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPlanoPage } from './novo-plano.page';

describe('NovoPlanoPage', () => {
  let component: NovoPlanoPage;
  let fixture: ComponentFixture<NovoPlanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoPlanoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoPlanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
