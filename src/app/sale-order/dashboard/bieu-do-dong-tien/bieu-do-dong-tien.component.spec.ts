import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BieuDoDongTienComponent } from './bieu-do-dong-tien.component';

describe('BieuDoDongTienComponent', () => {
  let component: BieuDoDongTienComponent;
  let fixture: ComponentFixture<BieuDoDongTienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BieuDoDongTienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BieuDoDongTienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
