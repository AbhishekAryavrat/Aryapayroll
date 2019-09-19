import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './themes/header/header.component';
import { FooterComponent } from './themes/footer/footer.component';
import { ListComponent } from './pages/list/list.component';


const routes: Routes = [
  {
    path:'list',
    component:ListComponent,
  },
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
