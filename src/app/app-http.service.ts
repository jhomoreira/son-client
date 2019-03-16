import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable()

export class AppHttpService {

  protected url: string;
  public httpOptions: object;

  constructor(protected http: HttpClient, private router: Router) {
    this.setAccessToken();
  }

  request() {
    return this.http;
  }

  setAccessToken() {
    const token = this.getCookie('token');

    this.httpOptions = {
      headers: new HttpHeaders ({
        'Authorization': 'Bearer ' + token, 'Content-Type': 'application/x-www-form-urlencoded',
      })
    };

  }

  builder(resource: string){
    this.url = environment.server_url + '/api/v1/' + resource;
    return this;
  }


  list() {
    const observable = this.http.get(this.url, this.httpOptions);
    return this.toPromise(observable);
  }

  create(data) {
    const observable = this.http.post(this.url, data, this.httpOptions);
    return this.toPromise(observable);

  }

  get(id) {
    const observable =  this.http.get(this.url + '/' + id, this.httpOptions);
    return this.toPromise(observable);

  }

  update(id, data) {
    const observable =  this.http.put(this.url + '/' + id, data, this.httpOptions);
    return this.toPromise(observable);

  }

  protected toPromise(request) {
    return request.toPromise()
        .then((res: Response) => {
          return res.json() || {};
        })
        .catch((err) => {
          let message = 'Algo deu errado no servidor, informe o erro ' + err.status + ' ao administrador.';

          if (err.status === 401) {
            message = 'Você não teme permissão para ver isso, informa um usuário e senha válido';
            this.router.navigate(['/login']);
          }

          if (err.status === 422) {
            message = 'Falha de validação, verifique os campos';
          }

          if (err.status === 404) {
            message = 'Página não encontrada';
          }

          Materialize.toast(message, 3000, 'red');
        });
  }

  private getCookie(name: any) {
    const cookies = document.cookie;
    if (!cookies) {
      return 'sem cookies';
    }

    const cookiesCollection: string[] = cookies.split(';');
    for (let i = 0; i < cookiesCollection.length; i++) {
      const cookieCurrent = cookiesCollection[i].split('=');

      if (cookieCurrent[0].trim() === name) {
        return cookieCurrent[1] || null;
      }
    }
    return null;

  }

}
