import { Component, OnInit } from '@angular/core';
import { AppHttpService} from "../../app-http.service";
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users-show',
  templateUrl: './users-show.component.html',
  styleUrls: ['./users-show.component.css']
})
export class UsersShowComponent implements OnInit {

  public user: object = {};

  constructor(private service: AppHttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {}
}
