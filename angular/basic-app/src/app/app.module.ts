import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { H1DataComponent } from './h1-data/h1-data.component';
import { SmallAlertComponent } from './small-alert/small-alert.component';
import { BoldAlertComponent } from './small-alert/bold-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    H1DataComponent,
    SmallAlertComponent,
    BoldAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
