import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { LoggerService } from 'src/logger/logger.service';
import { LoggerModule } from 'src/logger/logger.module'
import { Mongoose } from 'mongoose';
import { LoggerSchema } from './logger/schema/logger.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://cbarreto_dev:QtC3LxOU1OCb5OTz@cluster0.dy1xd.mongodb.net/garantti_log?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name: 'Logger', schema: LoggerSchema}]),
    LoggerModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    LoggerService
  ],
})
export class AppModule {}
