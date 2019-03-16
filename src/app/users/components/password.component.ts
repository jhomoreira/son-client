import { Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html'
})
export class PasswordComponent{

    constructor(private service: AuthService) {}

    user: any = {
        password: null,
        password_confirmation: null
    };


    save(e) {
        e.preventDefault();

        if (this.user.password && this.user.password === this.user.password_confirmation) {
            this.service.builder().changePassword(this.user)
            .then(() => {
                Materialize.toast('salvo com sucesso', 3000);
            });
        } else {
            Materialize.toast('Verifique a senha', 3000, 'red');
        }
    }
}