import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCatechistsComponent } from './insert-catechists.component';

describe('InsertCatechistsComponent', () => {
  let component: InsertCatechistsComponent;
  let fixture: ComponentFixture<InsertCatechistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertCatechistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCatechistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
