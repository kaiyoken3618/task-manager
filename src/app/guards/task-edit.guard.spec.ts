import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { taskEditGuard } from './task-edit.guard';

describe('taskEditGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => taskEditGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
