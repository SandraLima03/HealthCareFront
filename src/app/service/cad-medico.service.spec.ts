import { TestBed } from '@angular/core/testing';

import { CadMedicoService } from './cad-medico.service';

describe('CadMedicoService', () => {
  let service: CadMedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadMedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
