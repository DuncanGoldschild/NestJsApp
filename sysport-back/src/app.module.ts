import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AthletesModule } from './athletes/athletes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ObserverService } from "./services/observer";

@Module({
  imports: [
    AthletesModule,
    MongooseModule.forRoot('mongodb://localhost/sysport')
  ],
  controllers: [AppController],
  providers: [AppService, ObserverService],
})
export class AppModule { }