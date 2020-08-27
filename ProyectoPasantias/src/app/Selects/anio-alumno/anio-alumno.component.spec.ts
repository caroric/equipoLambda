import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnioAlumnoComponent } from './anio-alumno.component';

describe('AnioAlumnoComponent', () => {
  let component: AnioAlumnoComponent;
  let fixture: ComponentFixture<AnioAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnioAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnioAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
