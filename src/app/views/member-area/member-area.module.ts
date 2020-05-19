import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberAreaRoutingModule } from './member-area-routing.module';
import { MemberAreaComponent } from './member-area.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [MemberAreaComponent, DashboardComponent],
  imports: [
    CommonModule,
    MemberAreaRoutingModule,
    SharedModule
  ]
})
export class MemberAreaModule { }
