import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: []
})

export class LoginComponent {
    users: any = {
        username: null,
        password: null,
    };

    constructor(private authService: AuthService, private router: Router) {}

    login($event) {
        $event.preventDefault();

        if (!this.users.username || !this.users.password) {
            Materialize.toast('Preencha o formulário', 3000, 'red');
            return;
        }

        const data = {
            grant_type: 'password',
            client_id: environment.client_id,
            client_secret: environment.client_secret,
            username: this.users.username,
            password: this.users.password,
            scope: ''
        };

        this.authService.login(data)
            .then((res: any) => {
                document.cookie = "token=" + res.access_token + "; expires=" + res.expires_in;
                this.authService.setAccessToken();
                this.router.navigate(['/']);
            });
    }
}