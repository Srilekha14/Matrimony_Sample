import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeScreenComponent } from './swipe-screen.component';

describe('SwipeScreenComponent', () => {
  let component: SwipeScreenComponent;
  let fixture: ComponentFixture<SwipeScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwipeScreenComponent]
    });
    fixture = TestBed.createComponent(SwipeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
