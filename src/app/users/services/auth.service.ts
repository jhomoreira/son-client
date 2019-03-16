import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppHttpService } from '../../app-http.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';


@Injectable()
export class AuthService extends AppHttpService {
    eventEmitter: EventEmitter<any> = new EventEmitter();

    builder (resource: string = '') {
        return super.builder('auth' + resource);
    }

    getUser() {
        return this.builder('/me')
            .list();
    }

    changePassword(data) {
        let observable = this.http.post(this.url + '/change-password', data, this.httpOptions);
        return this.toPromise(observable);
    }

    editProfile(data) {
        const observable = this.http.post(this.url + '/edit-profile', data, this.httpOptions);
        return this.toPromise(observable);
    }

    login(data) {
        const observable = this.http.post(environment.server_url + '/oauth/token', data);
        console.log(observable);
        return this.toPromise(observable).then((res) => {
            this.eventEmitter.emit();
            return res;
        });
    }
}