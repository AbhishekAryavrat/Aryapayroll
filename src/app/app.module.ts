import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesComponent } from './themes/themes.component';
import { HeaderComponent } from './themes/header/header.component';
import { FooterComponent } from './themes/footer/footer.component';
import { SidebarComponent } from './themes/sidebar/sidebar.component';
import { ListComponent } from './pages/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    ThemesComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
