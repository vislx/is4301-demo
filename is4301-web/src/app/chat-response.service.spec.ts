import { TestBed, inject } from '@angular/core/testing';

import { ChatResponseService } from './chat-response.service';

describe('ChatResponseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatResponseService]
    });
  });

  it('should be created', inject([ChatResponseService], (service: ChatResponseService) => {
    expect(service).toBeTruthy();
  }));
});
