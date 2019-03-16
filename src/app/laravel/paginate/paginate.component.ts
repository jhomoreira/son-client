import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AppHttpService } from "../../app-http.service";


@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {
  @Input() resource: string;
  @Input() totalPage: number = 0;
  @Input() activePage: number = 0;
  @Output() onChangePage = new EventEmitter<any>();
  pages: Array<number> = [];

  constructor(private service: AppHttpService) { }

  ngOnInit() {}

  ngOnChanges() {}

  changePage() {}

}
