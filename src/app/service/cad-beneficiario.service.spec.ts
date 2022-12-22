import { TestBed } from '@angular/core/testing';

import { CadBeneficiarioService } from './cad-beneficiario.service';

describe('CadBeneficiarioService', () => {
  let service: CadBeneficiarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadBeneficiarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
