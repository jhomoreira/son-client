import { Component, OnInit } from '@angular/core';
import { NoticiasService} from './services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  public noticias: any;

  constructor(
      private httpService: NoticiasService,
      private service: NoticiasService,
  ) { }

  ngOnInit() {
    this.service.builder('noticias')
        .list()
        .subscribe((data) => {
          this.noticias = data;
        });
    return this;
  }


}
