import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesDisplayComponent } from './trades-display.component';

describe('TradesDisplayComponent', () => {
  let component: TradesDisplayComponent;
  let fixture: ComponentFixture<TradesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradesDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
