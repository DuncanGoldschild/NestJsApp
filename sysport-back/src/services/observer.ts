import * as watch from 'node-watch';
import * as fs from 'fs';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class ObserverService implements OnModuleInit {
    onModuleInit() {
        this.start_observer();
    }
    start_observer() {
        //const herFilePath = 'test.txt';
        const herFilePath = 'D:\\Terrain Version 4\\EPREUVE\\PERCHE___JUF_CONCOURS_1.her';

        var previousHerFile = fs.readFileSync(herFilePath, 'utf-8').split(/\r?\n/);
        var currentHerFile;

        console.log("Observer launched")
        watch.default(herFilePath, { recursive: true }, function (evt, name) {
            readHerFile(herFilePath)
        });

        function readHerFile(file) {
            currentHerFile = fs.readFileSync(file, 'utf-8').split(/\r?\n/)
            for (var i = 0; i < currentHerFile.length; i++) {
                if (previousHerFile[i] != currentHerFile[i]) {
                    console.log(currentHerFile[i]);
                }
            }
            previousHerFile = currentHerFile;
        }
    }
}