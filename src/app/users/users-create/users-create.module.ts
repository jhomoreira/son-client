import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MzInputModule } from 'ngx-materialize';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [],
  imports: [
    MzInputModule,
    TextMaskModule,
    CommonModule
  ]
})
export class UsersCreateModule { }
