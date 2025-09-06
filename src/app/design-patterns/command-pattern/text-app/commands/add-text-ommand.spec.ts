import { TestBed } from '@angular/core/testing';

import { AddTextCommand } from './add-text-command';

describe('AddTextOmmand', () => {
  let service: AddTextCommand;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTextCommand);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
