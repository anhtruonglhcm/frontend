import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryNetworkComponent } from './delivery-network.component';

describe('DeliveryNetworkComponent', () => {
  let component: DeliveryNetworkComponent;
  let fixture: ComponentFixture<DeliveryNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
