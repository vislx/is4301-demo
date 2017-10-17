import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbLineChartComponent } from './db-line-chart.component';

describe('DbLineChartComponent', () => {
  let component: DbLineChartComponent;
  let fixture: ComponentFixture<DbLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
