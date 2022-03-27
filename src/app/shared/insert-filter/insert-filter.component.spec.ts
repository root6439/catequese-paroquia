import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertFilterComponent } from './insert-filter.component';

describe('InsertFilterComponent', () => {
  let component: InsertFilterComponent;
  let fixture: ComponentFixture<InsertFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
