import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from '../config';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        { provide: ConfigService, useValue: new ConfigService('.env') },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('test', () => {
    it('should return "Test"', () => {
      expect(appController.getTest()).toBe('Test');
    });
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.root()).toBe('Hello World!');
    });
  });
});
