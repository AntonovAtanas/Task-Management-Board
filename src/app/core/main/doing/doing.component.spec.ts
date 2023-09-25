import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoingComponent } from './doing.component';

describe('DoingComponent', () => {
  let component: DoingComponent;
  let fixture: ComponentFixture<DoingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DoingComponent]
    });
    fixture = TestBed.createComponent(DoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
