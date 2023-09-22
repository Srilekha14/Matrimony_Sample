import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicViewComponent } from './ionic-view.component';

describe('IonicViewComponent', () => {
  let component: IonicViewComponent;
  let fixture: ComponentFixture<IonicViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IonicViewComponent]
    });
    fixture = TestBed.createComponent(IonicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
