import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoDetalhePage } from './plano-detalhe.page';

describe('PlanoDetalhePage', () => {
  let component: PlanoDetalhePage;
  let fixture: ComponentFixture<PlanoDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoDetalhePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
