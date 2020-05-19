import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtDefaultLayoutComponent } from 'src/app/containers/ext-default-layout/ext-default-layout.component';
import { IntDefaultLayoutComponent } from 'src/app/containers/int-default-layout/int-default-layout.component';
import { ExtDefaultFooterComponent } from 'src/app/containers/ext-default-footer/ext-default-footer.component';



@NgModule({
  declarations: [
    ExtDefaultLayoutComponent,
    IntDefaultLayoutComponent,
    ExtDefaultFooterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ExtDefaultLayoutComponent,
    IntDefaultLayoutComponent,
    ExtDefaultFooterComponent,
  ]
})
export class SharedModule { }
