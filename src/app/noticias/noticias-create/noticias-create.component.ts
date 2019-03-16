import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";

import { AuthService } from '../../users/services/auth.service';


@Component({
  selector: 'app-noticias-create',
  templateUrl: './noticias-create.component.html',
  styleUrls: ['./noticias-create.component.css']
})
export class NoticiasCreateComponent implements OnInit {

  editorForm: FormGroup;

  editorStyle = {
    height: '300px',
    backgroundColor: '#fff'
  };

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit() {
    this.editorForm = new FormGroup({
      'content': new FormControl(null),
      'title': new FormControl(null),
      'thumb': new FormControl(null),
    });
  }

  onSubmit() {
    this.service.builder('noticias')
        .create(this.editorForm.value)
        .subscribe(() => {
          return this.router.navigate(['/noticias']);
        });
  }

}
