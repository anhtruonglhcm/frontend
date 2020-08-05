import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonKhongHopDongComponent } from './don-khong-hop-dong.component';

describe('DonKhongHopDongComponent', () => {
  let component: DonKhongHopDongComponent;
  let fixture: ComponentFixture<DonKhongHopDongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonKhongHopDongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonKhongHopDongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
