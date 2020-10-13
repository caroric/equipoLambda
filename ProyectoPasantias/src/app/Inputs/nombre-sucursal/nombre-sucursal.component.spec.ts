import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreSucursalComponent } from './nombre-sucursal.component';

describe('NombreSucursalComponent', () => {
  let component: NombreSucursalComponent;
  let fixture: ComponentFixture<NombreSucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NombreSucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NombreSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
