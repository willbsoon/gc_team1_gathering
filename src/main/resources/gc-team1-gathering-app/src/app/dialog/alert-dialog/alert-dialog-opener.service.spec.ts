import { TestBed } from '@angular/core/testing';

import { AlertDialogOpener } from './alert-dialog-opener.service';

describe('AlertDialogOpener', () => {
  let service: AlertDialogOpener;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertDialogOpener);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
