import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NgHttpLoaderModule } from 'ng-http-loader';



@NgModule({
  declarations: [ListComponent,DashboardComponent,PagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    NgHttpLoaderModule,
  ]
})
export class PagesModule { }
