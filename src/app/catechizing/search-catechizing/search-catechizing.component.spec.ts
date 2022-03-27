import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCatechizingComponent } from './search-catechizing.component';

describe('SearchCatechizingComponent', () => {
  let component: SearchCatechizingComponent;
  let fixture: ComponentFixture<SearchCatechizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCatechizingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCatechizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
