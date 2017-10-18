import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBottomRightComponent } from './news-bottom-right.component';

describe('NewsBottomRightComponent', () => {
  let component: NewsBottomRightComponent;
  let fixture: ComponentFixture<NewsBottomRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBottomRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBottomRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
