import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardAssetComponent } from './news-card-asset.component';

describe('NewsCardAssetComponent', () => {
  let component: NewsCardAssetComponent;
  let fixture: ComponentFixture<NewsCardAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCardAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCardAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
