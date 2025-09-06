import { TestBed } from '@angular/core/testing';

import { BaseCommand } from './base-command';

describe('BaseCommand', () => {
  let service: BaseCommand;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCommand);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
