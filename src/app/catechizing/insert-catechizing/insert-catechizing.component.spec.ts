import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCatechizingComponent } from './insert-catechizing.component';

describe('InsertCatechizingComponent', () => {
  let component: InsertCatechizingComponent;
  let fixture: ComponentFixture<InsertCatechizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertCatechizingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCatechizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
