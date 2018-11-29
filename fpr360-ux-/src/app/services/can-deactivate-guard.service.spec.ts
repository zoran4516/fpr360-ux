import { TestBed, inject } from '@angular/core/testing';

import { CanDeactivateGuard } from './can-deactivate-guard.service';

describe('CanDeactivateGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateGuard]
    });
  });

  it('should be created', inject([CanDeactivateGuard], (service: CanDeactivateGuard) => {
    expect(service).toBeTruthy();
  }));
});
