import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoardDialogComponent } from './add-board-dialog.component';

describe('AddBoardComponent', () => {
  let component: AddBoardDialogComponent;
  let fixture: ComponentFixture<AddBoardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBoardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
