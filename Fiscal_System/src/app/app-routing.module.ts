import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BusinessComponent } from './business/business.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'user', component: BusinessComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'customer', component:CustomerComponent},
  {path: '**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
