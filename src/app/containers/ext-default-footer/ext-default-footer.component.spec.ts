import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtDefaultFooterComponent } from './ext-default-footer.component';

describe('ExtDefaultFooterComponent', () => {
  let component: ExtDefaultFooterComponent;
  let fixture: ComponentFixture<ExtDefaultFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtDefaultFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtDefaultFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
