import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonNongThonMoiComponent } from './don-nong-thon-moi.component';

describe('DonNongThonMoiComponent', () => {
  let component: DonNongThonMoiComponent;
  let fixture: ComponentFixture<DonNongThonMoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonNongThonMoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonNongThonMoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
