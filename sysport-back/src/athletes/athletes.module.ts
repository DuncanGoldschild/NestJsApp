import { Module } from '@nestjs/common';
import { AthletesController } from './athletes.controller';
import { AthletesService } from './athletes.service';
import { AthleteSchema } from './schemas/athlete.schema';
import { AthleteGateway } from "./athlete.gateway";
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Athlete', schema: AthleteSchema }])],
  controllers: [AthletesController],
  providers: [AthletesService]
})
export class AthletesModule {}