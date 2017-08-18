import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Store, StoreModule } from '@ngrx/store';

import { EwokListComponent } from './ewok-list.component';

@NgModule({
  declarations: [
    EwokListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    EwokListComponent
  ],
  providers: [],
})
export class EwokListModule { }
