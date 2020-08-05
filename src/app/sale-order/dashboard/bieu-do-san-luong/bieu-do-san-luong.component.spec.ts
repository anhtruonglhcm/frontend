import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BieuDoSanLuongComponent } from './bieu-do-san-luong.component';

describe('BieuDoSanLuongComponent', () => {
  let component: BieuDoSanLuongComponent;
  let fixture: ComponentFixture<BieuDoSanLuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BieuDoSanLuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BieuDoSanLuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
