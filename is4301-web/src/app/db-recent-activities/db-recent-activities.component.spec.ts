import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbRecentActivitiesComponent } from './db-recent-activities.component';

describe('DbRecentActivitiesComponent', () => {
  let component: DbRecentActivitiesComponent;
  let fixture: ComponentFixture<DbRecentActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbRecentActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbRecentActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
