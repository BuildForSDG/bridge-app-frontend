import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header-navigation",
  templateUrl: "./header-navigation.component.html",
  styleUrls: ["./header-navigation.component.scss"],
})
export class HeaderNavigationComponent implements OnInit, OnDestroy {
  activeStaff: any;
  notifications: any[];
  unReadNotifications: any[] = [];
  readNotifications: any[] = [];
  sub = new Subscription();

  constructor(
    // private userService: UserService,
    // private auth: AuthenticationService,
    private router: Router,
    // private _webS: WebSocketService
  ) {}

  ngOnInit() {
    // this.activeStaff = this.auth.getLoggedInStaff();
    console.log(this.activeStaff);
    this.fetchRoleNotifications();
  }
  fetchRoleNotifications() {
    // this._webS.getRoleNotifications().subscribe((notifications) => {
    //   this.notifications = notifications;
    //   this.notifications.forEach((notification) => {
    //     notification.read
    //       ? this.readNotifications.push(notification)
    //       : this.unReadNotifications.push(notification);
    //   });
    // });
  }

  routeToDashboard() {
    this.router.navigate(["admin/dashboard"]);
  }

  routeToProjects() {
    this.router.navigate(["admin/projects"]);
  }

  routeToBudgets() {
    // if (!this.activeStaff) {
    //   // return;
    // }
    this.router.navigate(["/admin/budgets"]);
  }

  routeToRequests() {
    // if (!this.activeStaff) {
    //   // return;
    // }
    this.router.navigate(["/admin/requests"]);
  }

  routeToUsers() {
    // if(!this.activeStaff) {
    //   return;
    // }
    this.router.navigate(["/admin/users"]);
  }
  routeToVendors() {
    this.router.navigate(["/admin/vendors"]);
  }
  routeToResources() {
    // if(!this.activeStaff) {
    //   return;
    // }
    this.router.navigate(["/admin/resources"]);
  }

  routeToApprovedRequests() {
    // if(!this.activeStaff) {
    //   //return;
    // }
    this.router.navigate(["/admin/approved-memos"]);
  }

  routeToAdverts() {
    // if(!this.activeStaff) {
    //   //return;
    // }
    this.router.navigate(["/admin/adverts"]);
  }

  routeToEvaluations() {
    // if(!this.activeStaff) {
    //   //return;
    // }
    this.router.navigate(["/admin/evaluation"]);
  }

  routeToBidsPaymentsLog() {
    // if(!this.activeStaff) {
    //   //return;
    // }
    this.router.navigate(["/admin/bid-payments-log"]);
  }

  routeToTenderBoardMemo() {
    // if (!this.activeStaff) {
    //   //return;
    // }
    this.router.navigate(["/admin/tender-board-memo"]);
  }

  routeToAwardedLots() {
    // if (!this.activeStaff) {
    //   //return;
    // }
    this.router.navigate(["/admin/awarded-lots"]);
  }

  routeToContracts() {
    // if (!this.activeStaff) {
    //   //return;
    // }
    this.router.navigate(["/admin/contracts"]);
  }

  routeToSettings() {
    // if (!this.activeStaff) {
    //   //return;
    // }
    this.router.navigate(["/admin/settings"]);
  }

  routeToSuperAdminPanel() {
    // if (!this.activeStaff) {
    //   //return;
    // }
    this.router.navigate(["./super-admin"]);
  }

  logout() {
    // this.auth.logout();
    this.router.navigate(["/login"]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
