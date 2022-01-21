import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerService } from 'src/logger/logger.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly loggerService: LoggerService
    ) {}

  @Get()
  getHello(): string {

    this.loggerService.sendLog({
      message: 'teste',
      date: new Date(),
      level: 'info',
      context: 'teste',
      stack: 'teste',
      user: 'teste',
      userId: 'teste',
    });
    return this.appService.getHello();
  }
}
