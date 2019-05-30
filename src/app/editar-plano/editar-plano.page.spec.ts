import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPlanoPage } from './editar-plano.page';

describe('EditarPlanoPage', () => {
  let component: EditarPlanoPage;
  let fixture: ComponentFixture<EditarPlanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPlanoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPlanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
