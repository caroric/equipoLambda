import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesarPasantiasComponent } from './procesar-pasantias.component';

describe('ProcesarPasantiasComponent', () => {
  let component: ProcesarPasantiasComponent;
  let fixture: ComponentFixture<ProcesarPasantiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesarPasantiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesarPasantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
