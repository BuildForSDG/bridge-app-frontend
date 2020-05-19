import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtDefaultLayoutComponent } from 'src/app/containers/ext-default-layout/ext-default-layout.component';
import { IntDefaultLayoutComponent } from 'src/app/containers/int-default-layout/int-default-layout.component';
import { ExtDefaultFooterComponent } from 'src/app/containers/ext-default-footer/ext-default-footer.component';
import { HeaderNavigationComponent } from '../header-navigation/header-navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ExtDefaultLayoutComponent,
    IntDefaultLayoutComponent,
    ExtDefaultFooterComponent,
    HeaderNavigationComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    ExtDefaultLayoutComponent,
    IntDefaultLayoutComponent,
    ExtDefaultFooterComponent,
    HeaderNavigationComponent
  ]
})
export class SharedModule { }
