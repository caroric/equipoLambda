import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRemuneracionComponent } from './input-remuneracion.component';

describe('InputRemuneracionComponent', () => {
  let component: InputRemuneracionComponent;
  let fixture: ComponentFixture<InputRemuneracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputRemuneracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRemuneracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
