import { Injectable, EventEmitter } from '@angular/core';
import {AppHttpService} from 'src/app/app-http.service';

@Injectable()

export class NoticiasService extends AppHttpService{

    eventEmitter: EventEmitter<any> = new EventEmitter;

    builder(resource: string = '') {
        return super.builder('' + resource);
    }
}