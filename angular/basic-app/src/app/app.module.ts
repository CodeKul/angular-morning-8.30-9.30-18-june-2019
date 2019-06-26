import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { H1DataComponent } from './h1-data/h1-data.component';
import { SmallAlertComponent } from './small-alert/small-alert.component';
import { BoldAlertComponent } from './small-alert/bold-alert.component';
import { PricingComponent } from './pricing/pricing.component';
import { NvComponent } from './pricing/nv/nv.component';
import { InfoComponent } from './pricing/info/info.component';
import { PricingCardComponent } from './pricing/pricing-card/pricing-card.component';
import { FooterComponent } from './pricing/footer/footer.component';
import { FooterItemComponent } from './pricing/footer/footer-item/footer-item.component';

@NgModule({
  declarations: [
    AppComponent,
    H1DataComponent,
    SmallAlertComponent,
    BoldAlertComponent,
    PricingComponent,
    NvComponent,
    InfoComponent,
    PricingCardComponent,
    FooterComponent,
    FooterItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
