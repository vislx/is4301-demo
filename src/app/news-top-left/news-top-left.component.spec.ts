import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTopLeftComponent } from './news-top-left.component';

describe('NewsTopLeftComponent', () => {
  let component: NewsTopLeftComponent;
  let fixture: ComponentFixture<NewsTopLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTopLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTopLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
