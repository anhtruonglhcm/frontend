import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonKhuyenMaiComponent } from './don-khuyen-mai.component';

describe('DonKhuyenMaiComponent', () => {
  let component: DonKhuyenMaiComponent;
  let fixture: ComponentFixture<DonKhuyenMaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonKhuyenMaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonKhuyenMaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
