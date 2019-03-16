import { Component, OnInit } from '@angular/core';
import {AppHttpService} from "../../app-http.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  public user: any = {};

  constructor(private service: AppHttpService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {}
}
