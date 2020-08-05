import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipPointComponent } from './ship-point.component';

describe('ShipPointComponent', () => {
  let component: ShipPointComponent;
  let fixture: ComponentFixture<ShipPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
