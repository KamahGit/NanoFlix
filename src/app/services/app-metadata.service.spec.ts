import { TestBed } from '@angular/core/testing';

import { AppMetadataService } from './app-metadata.service';

describe('AppMetadataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppMetadataService = TestBed.get(AppMetadataService);
    expect(service).toBeTruthy();
  });
});
