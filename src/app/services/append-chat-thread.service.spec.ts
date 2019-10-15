import { TestBed } from '@angular/core/testing';

import { AppendChatThreadService } from './append-chat-thread.service';

describe('AppendChatThreadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppendChatThreadService = TestBed.get(AppendChatThreadService);
    expect(service).toBeTruthy();
  });
});
