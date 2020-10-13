import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazonSocialComponent } from './razon-social.component';

describe('RazonSocialComponent', () => {
  let component: RazonSocialComponent;
  let fixture: ComponentFixture<RazonSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazonSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazonSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
