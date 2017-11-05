import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbMarketTrendsComponent } from './db-market-trends.component';

describe('DbMarketTrendsComponent', () => {
  let component: DbMarketTrendsComponent;
  let fixture: ComponentFixture<DbMarketTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbMarketTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbMarketTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
