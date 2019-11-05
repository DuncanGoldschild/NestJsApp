import { Injectable, HttpException } from '@nestjs/common';
import { ATHLETES } from './mocks/athletes.mock';

@Injectable()
export class AthletesService {
    athletes = ATHLETES;

    getAthletes(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.athletes);
        });
    }
    getAthlete(athleteID): Promise<any> {
        let id = Number(athleteID);
        return new Promise(resolve => {
            const athlete = this.athletes.find(athlete => athlete.id === id);
            if (!athlete) {
                throw new HttpException('Athlete does not exist!', 404);
            }
            resolve(athlete);
        });
    }
    addAthlete(athlete): Promise<any> {
        return new Promise(resolve => {
            this.athletes.push(athlete);
            resolve(this.athletes);
        });
    }
    deleteAthlete(athleteID): Promise<any> {
        let id = Number(athleteID);
        return new Promise(resolve => {
            let index = this.athletes.findIndex(athlete => athlete.id === id);
            if (index === -1) {
                throw new HttpException('Athlete does not exist!', 404);
            }
            this.athletes.splice(index, 1);
            resolve(this.athletes);
        });
    }
}
