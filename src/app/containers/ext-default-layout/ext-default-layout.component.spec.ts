import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtDefaultLayoutComponent } from './ext-default-layout.component';

describe('ExtDefaultLayoutComponent', () => {
  let component: ExtDefaultLayoutComponent;
  let fixture: ComponentFixture<ExtDefaultLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtDefaultLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtDefaultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
