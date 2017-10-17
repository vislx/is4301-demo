import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbIndicatorCardComponent } from './db-indicator-card.component';

describe('DbIndicatorCardComponent', () => {
  let component: DbIndicatorCardComponent;
  let fixture: ComponentFixture<DbIndicatorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbIndicatorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbIndicatorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
