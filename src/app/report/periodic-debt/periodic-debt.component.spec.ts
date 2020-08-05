import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicDebtComponent } from './periodic-debt.component';

describe('PeriodicDebtComponent', () => {
  let component: PeriodicDebtComponent;
  let fixture: ComponentFixture<PeriodicDebtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicDebtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
