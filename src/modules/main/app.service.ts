import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {

  getTest(): string {
    return 'Test';
  }

  root(): string {
    return 'Hello World!';
  }
}
