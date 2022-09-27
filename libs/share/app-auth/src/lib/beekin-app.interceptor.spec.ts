import { TestBed } from '@angular/core/testing';

import { BeekinAppInterceptor } from './beekin-app.interceptor';

describe('BeekinAppInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BeekinAppInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BeekinAppInterceptor = TestBed.inject(BeekinAppInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
