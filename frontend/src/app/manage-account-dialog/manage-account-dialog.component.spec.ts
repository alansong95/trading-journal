import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAccountDialogComponent } from './manage-account-dialog.component';

describe('ManageAccountDialogComponent', () => {
  let component: ManageAccountDialogComponent;
  let fixture: ComponentFixture<ManageAccountDialogComponent>;

  beforeEach(async(() => {
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
