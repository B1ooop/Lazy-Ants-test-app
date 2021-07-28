import { TestBed } from '@angular/core/testing';

import { ManagementToolsService } from './management-tools.service';

describe('ManagementToolsService', () => {
  let service: ManagementToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
