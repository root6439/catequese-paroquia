import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCatechistsComponent } from './search-catechists.component';

describe('SearchCatechistsComponent', () => {
  let component: SearchCatechistsComponent;
  let fixture: ComponentFixture<SearchCatechistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCatechistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCatechistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
