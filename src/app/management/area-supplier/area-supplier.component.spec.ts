import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSupplierComponent } from './area-supplier.component';

describe('AreaSupplierComponent', () => {
  let component: AreaSupplierComponent;
  let fixture: ComponentFixture<AreaSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
