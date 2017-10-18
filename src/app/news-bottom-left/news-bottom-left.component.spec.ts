import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBottomLeftComponent } from './news-bottom-left.component';

describe('NewsBottomLeftComponent', () => {
  let component: NewsBottomLeftComponent;
  let fixture: ComponentFixture<NewsBottomLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBottomLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBottomLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
