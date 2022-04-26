import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieService } from './serie.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SerieListComponent],
  providers: [SerieService],
  exports: [SerieListComponent]
})
export class SerieModule { }
