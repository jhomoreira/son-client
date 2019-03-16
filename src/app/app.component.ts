import { Component } from '@angular/core';
import { AuthService } from './users/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Agroceres App';
  isLogged = false;


  constructor(protected authService: AuthService){}

  ngOnInit() { }

}
