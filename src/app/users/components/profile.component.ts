import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    user: object = {};

    constructor(private authService: AuthService) {}

    ngOnInit () {
        this.authService.getUser();
    }

    save(e) {
        e.preventDefault();

        this.authService.builder().editProfile(this.user);
    }
}