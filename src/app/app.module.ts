import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileBrowserModule } from './file-browser/file-browser.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileBrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
