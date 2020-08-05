import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonHopDongComponent } from './don-hop-dong.component';

describe('DonHopDongComponent', () => {
  let component: DonHopDongComponent;
  let fixture: ComponentFixture<DonHopDongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonHopDongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonHopDongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
