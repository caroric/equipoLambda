import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosPasantiaComponent } from './pedidos-pasantia.component';

describe('PedidosPasantiaComponent', () => {
  let component: PedidosPasantiaComponent;
  let fixture: ComponentFixture<PedidosPasantiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosPasantiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosPasantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
