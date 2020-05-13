import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './views/components/landing-page/landing-page.component';
import { AboutUsComponent } from './views/components/about-us/about-us.component';
import { ExtDefaultLayoutComponent } from './containers/ext-default-layout/ext-default-layout.component';
import { IntDefaultLayoutComponent } from './containers/int-default-layout/int-default-layout.component';
import { JQ_TOKEN } from './_services/jQuery.service';

let jQuery = window["$"];
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutUsComponent,
    ExtDefaultLayoutComponent,
    IntDefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: JQ_TOKEN, useValue: jQuery },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
