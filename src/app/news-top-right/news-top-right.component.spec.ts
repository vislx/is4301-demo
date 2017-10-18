import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTopRightComponent } from './news-top-right.component';

describe('NewsTopRightComponent', () => {
  let component: NewsTopRightComponent;
  let fixture: ComponentFixture<NewsTopRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTopRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTopRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
