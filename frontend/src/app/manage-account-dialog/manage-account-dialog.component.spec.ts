import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManageAccountDialogComponent } from './manage-account-dialog.component';

describe('ManageAccountDialogComponent', () => {
  let component: ManageAccountDialogComponent;
  let fixture: ComponentFixture<ManageAccountDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAccountDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAccountDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
