import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { AthletesService } from './athletes.service';
import { CreateAthleteDTO } from './dto/create-athlete.dto';

@Controller('athletes')
export class AthletesController {
    constructor(private athletesService: AthletesService) { }

    @Get()
    async getAthletes() {
        const athletes = await this.athletesService.findAll();
        return athletes;
    }

    @Post()
    async addAthlete(@Body() createAthleteDTO: CreateAthleteDTO) {
        const athlete = await this.athletesService.create(createAthleteDTO);
        return athlete;
    }
}