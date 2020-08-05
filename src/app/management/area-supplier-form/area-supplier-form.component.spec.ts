import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSupplierFormComponent } from './area-supplier-form.component';

describe('AreaSupplierFormComponent', () => {
  let component: AreaSupplierFormComponent;
  let fixture: ComponentFixture<AreaSupplierFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaSupplierFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaSupplierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
