import { TestBed } from '@angular/core/testing';

import { CommandInvoker } from './command-invoker';

describe('CommandInvoker', () => {
  let service: CommandInvoker;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandInvoker);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
