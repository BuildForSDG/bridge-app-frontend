import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './views/components/landing-page/landing-page.component';
import { AboutUsComponent } from './views/components/about-us/about-us.component';
import { ContactUsComponent } from './views/components/contact-us/contact-us.component';
import { TeamComponent } from './views/components/team/team.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'auth', loadChildren: () => import('./views/components/auth/auth.module').then(m => m.AuthModule) },
  { path: 'member-area', loadChildren: () => import('./views/member-area/member-area.module').then(m => m.MemberAreaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
