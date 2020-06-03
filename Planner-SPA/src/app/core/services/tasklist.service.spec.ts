/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TasklistService } from './tasklist.service';

describe('Service: Tasklist', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasklistService]
    });
  });

  it('should ...', inject([TasklistService], (service: TasklistService) => {
    expect(service).toBeTruthy();
  }));
});
