import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AppHttpService } from "../../app-http.service";

import { AuthService } from '../../users/services/auth.service';


@Component({
  selector: 'app-noticias-edit',
  templateUrl: './noticias-edit.component.html',
  styleUrls: ['./noticias-edit.component.css']
})
export class NoticiasEditComponent implements OnInit {

  public noticia: any = {};
  public Editor = ClassicEditor;

  public model = {
    editorData: this.noticia = ['content'],
  };


  constructor(private service: AuthService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit() {

    this.router.params
        .subscribe((params) => this.view(params.id));
  }

  view(id) {
    this.service.builder('noticias')
        .get(id)
        .subscribe((data) => this.noticia = data);

  }

  save() {
    this.service.builder('noticias')
        .update(this.noticia.id, this.noticia)
        .subscribe(() => {
          return this.route.navigate(['/noticias']);
        });
  }

}
