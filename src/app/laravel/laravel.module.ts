import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginateComponent } from './paginate/paginate.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    PaginateComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginateComponent,
    SearchComponent,
  ]
})
export class LaravelModule { }
