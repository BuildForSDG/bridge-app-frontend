import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ext-default-layout',
  templateUrl: './ext-default-layout.component.html',
  styleUrls: ['./ext-default-layout.component.scss']
})
export class ExtDefaultLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHomePage() {
    this.router.navigate(['home']);
  }

  goToAboutPage() {
    this.router.navigate(['about']);
  }

  goToContactPage() {
    this.router.navigate(['contact']);
  }

  goToTeamPage() {
    this.router.navigate(['team']);
  }

  goToLoginPage() {
    this.router.navigate(['auth']);
  }

  goToRegisterPage() {
    this.router.navigate(['auth/register']);
  }

}
