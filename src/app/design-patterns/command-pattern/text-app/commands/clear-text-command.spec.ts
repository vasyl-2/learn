import { TestBed } from '@angular/core/testing';

import { ClearTextCommand } from './clear-text-command';

describe('ClearTextCommand', () => {
  let service: ClearTextCommand;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClearTextCommand);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
