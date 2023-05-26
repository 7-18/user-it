import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { ApiService } from '../api/api.service';
import { HttpClientModule } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
