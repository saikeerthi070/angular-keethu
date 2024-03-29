import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SortPipe } from './sort.pipe';
import { SortoPipe } from './sorto.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SortPipe, SortoPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
