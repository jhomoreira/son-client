import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NoticiasComponent} from './noticias.component';
import { MzButtonModule } from 'ngx-materialize';
import {FormsModule} from '@angular/forms';

import { LaravelModule } from '../laravel/laravel.module';
import { NoticiasCreateComponent } from './noticias-create/noticias-create.component';
import { NoticiasShowComponent } from './noticias-show/noticias-show.component';
import { NoticiasEditComponent } from './noticias-edit/noticias-edit.component';

import { NoticiasService } from './services/noticias.service';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  {path: 'noticias', component: NoticiasComponent},
  {path: 'noticias/create', component: NoticiasCreateComponent},
  {path: 'noticias/:id', component: NoticiasShowComponent},
  {path: 'noticias/:id/edit', component: NoticiasEditComponent},
];

@NgModule({
  declarations: [
    NoticiasComponent,
    NoticiasCreateComponent,
    NoticiasShowComponent,
    NoticiasEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule,
    QuillModule,
    MzButtonModule,
    LaravelModule,
  ],
  providers: [
      NoticiasService,
  ]
})
export class NoticiasModule { }
