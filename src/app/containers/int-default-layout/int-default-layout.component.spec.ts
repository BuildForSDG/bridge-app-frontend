import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntDefaultLayoutComponent } from './int-default-layout.component';

describe('IntDefaultLayoutComponent', () => {
  let component: IntDefaultLayoutComponent;
  let fixture: ComponentFixture<IntDefaultLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntDefaultLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntDefaultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
