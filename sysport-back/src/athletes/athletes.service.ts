import { Injectable, HttpException } from '@nestjs/common';
import { Athlete } from "./interfaces/athlete.interface";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateAthleteDTO } from "./dto/create-athlete.dto";

@Injectable()
export class AthletesService {
    constructor(@InjectModel('Athlete') private readonly athleteModel: Model<Athlete>) {}

    async create(createAthleteDto: CreateAthleteDTO): Promise<Athlete> {
        const createdAthlete = new this.athleteModel(createAthleteDto);
        return await createdAthlete.save();
      }
    
      async findAll(): Promise<Athlete[]> {
        return await this.athleteModel.find().exec();
      }
}
