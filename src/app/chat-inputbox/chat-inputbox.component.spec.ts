import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInputboxComponent } from './chat-inputbox.component';

describe('ChatInputboxComponent', () => {
  let component: ChatInputboxComponent;
  let fixture: ComponentFixture<ChatInputboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatInputboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatInputboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
