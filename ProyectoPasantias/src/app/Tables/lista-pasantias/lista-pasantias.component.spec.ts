import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPasantiasComponent } from './lista-pasantias.component';

describe('ListaPasantiasComponent', () => {
  let component: ListaPasantiasComponent;
  let fixture: ComponentFixture<ListaPasantiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPasantiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPasantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
