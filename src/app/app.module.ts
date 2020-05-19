import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './views/components/landing-page/landing-page.component';
import { AboutUsComponent } from './views/components/about-us/about-us.component';
import { ExtDefaultLayoutComponent } from './containers/ext-default-layout/ext-default-layout.component';
import { IntDefaultLayoutComponent } from './containers/int-default-layout/int-default-layout.component';
import { ExtDefaultFooterComponent } from './containers/ext-default-footer/ext-default-footer.component';
import { JQ_TOKEN } from 'src/_services/jQuery.service';
import { ContactUsComponent } from './views/components/contact-us/contact-us.component';
import { TeamComponent } from './views/components/team/team.component';
import { SharedModule } from './shared/shared/shared.module';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

let jQuery = window["$"];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutUsComponent,
    ContactUsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule
  ],
  providers: [
    { provide: JQ_TOKEN, useValue: jQuery },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
