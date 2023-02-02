import { TestBed } from '@angular/core/testing';

import { ReturnMsgService } from './return-msg.service';

describe('ReturnMsgService', () => {
  let service: ReturnMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
