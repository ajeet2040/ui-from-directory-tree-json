import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule} from '../shared/shared.module'
import { FileBrowserRoutingModule } from './file-browser-routing.module';
import { FileBrowserComponent } from './file-browser.component'


@NgModule({
  declarations: [FileBrowserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FileBrowserRoutingModule,
    SharedModule
  ],
  exports: [FileBrowserComponent]
})
export class FileBrowserModule { }