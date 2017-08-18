import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Store, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { EwokListModule } from '../ewok-list/ewok-list.module';
import { ewoksReducer } from '../ewok-list/ewoks.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EwokListModule,
    StoreModule.provideStore({ ewoksReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
