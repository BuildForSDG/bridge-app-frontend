import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './views/components/landing-page/landing-page.component';
import { AboutUsComponent } from './views/components/about-us/about-us.component';
import { ContactUsComponent } from './views/components/contact-us/contact-us.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'auth', children: [
    { path: '', component: LandingPageComponent},
    { path: 'register', component: LandingPageComponent},
    { path: 'resetpassword', component: LandingPageComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
