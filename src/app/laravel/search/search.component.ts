import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AppHttpService } from "../../app-http.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() resource: string;
  @Output() onSearch = new EventEmitter<any>();

  private searchTerms = new Subject<string>();

  constructor(private service: AppHttpService) { }

  ngOnInit() {
  }

  search(){
  }

}
