import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerTableComponent } from './progress-spinner-table.component';

describe('ProgressSpinnerTableComponent', () => {
  let component: ProgressSpinnerTableComponent;
  let fixture: ComponentFixture<ProgressSpinnerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressSpinnerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSpinnerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
