import { Component, OnInit } from '@angular/core';
import {AppHttpService} from '../../app-http.service';
import { ActivatedRoute} from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';



@Component({
  selector: 'app-noticias-show',
  templateUrl: './noticias-show.component.html',
  styleUrls: ['./noticias-show.component.css']
})
export class NoticiasShowComponent implements OnInit {

  public noticia: object = {};

  public Editor = ClassicEditor;

  constructor(private service: AppHttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        .subscribe((params) => this.view(params.id));
  }

  view(id) {
    this.service.builder('noticias')
        .get(id)
        .subscribe((data) => this.noticia = data);

  }

}
