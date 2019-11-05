import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { AthletesService } from './athletes.service';
import { CreateAthleteDTO } from './dto/create-athlete.dto';

@Controller('athletes')
export class AthletesController {
    constructor(private athletesService: AthletesService) { }

    @Get()
    async getAthletes() {
        const athletes = await this.athletesService.getAthletes();
        return athletes;
    }

    @Get(':athleteID')
    async getAthlete(@Param('athleteID') athleteID) {
        const athlete = await this.athletesService.getAthlete(athleteID);
        console.log("test")
        return athlete;
    }

    @Post()
    async addAthlete(@Body() createAthleteDTO: CreateAthleteDTO) {
        const athlete = await this.athletesService.addAthlete(createAthleteDTO);
        return athlete;
    }

    @Delete()
    async deleteAthlete(@Query() query) {
        const athletes = await this.athletesService.deleteAthlete(query.athleteID);
        return athletes;
    }
}