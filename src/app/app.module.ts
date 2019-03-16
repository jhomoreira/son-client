import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MzSidenavModule } from 'ngx-materialize';
import { MzDropdownModule } from 'ngx-materialize';
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize';
import {UsersModule} from './users/users.module';
import {AppHttpService} from './app-http.service';
import {HttpClientModule} from '@angular/common/http';
import {NoticiasModule} from './noticias/noticias.module';


const appRoutes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MzSidenavModule,
    MzDropdownModule,
    MzIconModule,
    MzIconMdiModule,
    UsersModule,
    NoticiasModule,
    HttpClientModule
  ],
  providers: [AppHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
