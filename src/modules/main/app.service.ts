import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config';

@Injectable()
export class AppService {
  constructor(private config: ConfigService) {}

  getTest(): string {
    return 'Test';
  }

  root(): string {
    return 'Hello World!';
  }
}