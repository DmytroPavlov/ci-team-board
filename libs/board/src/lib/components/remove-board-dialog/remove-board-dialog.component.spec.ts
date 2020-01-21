import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBoardDialogComponent } from './remove-board-dialog.component';

describe('RemoveBoardDialogComponent', () => {
  let component: RemoveBoardDialogComponent;
  let fixture: ComponentFixture<RemoveBoardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveBoardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveBoardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
