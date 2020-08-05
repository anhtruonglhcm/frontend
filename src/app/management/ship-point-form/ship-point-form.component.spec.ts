import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipPointFormComponent } from './ship-point-form.component';

describe('ShipPointFormComponent', () => {
  let component: ShipPointFormComponent;
  let fixture: ComponentFixture<ShipPointFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipPointFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipPointFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
