import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardAdminComponent } from './authComponents/board-admin/board-admin.component';
import { BoardCustomerComponent } from './authComponents/board-customer/board-customer.component';
import { BoardEmployeeComponent } from './authComponents/board-employee/board-employee.component';
import { BoardUserComponent } from './authComponents/board-user/board-user.component';
import { HomeComponent } from './authComponents/home/home.component';
import { LoginComponent } from './authComponents/login/login.component';
import { ProfileComponent } from './authComponents/profile/profile.component';
import { RegisterComponent } from './authComponents/register/register.component';
import { AdminTaskViewComponent } from './components/admin-task-view/admin-task-view.component';
import { AdminTasksComponent } from './components/admin-tasks/admin-tasks.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { EmailComponent } from './components/email/email.component';
import { EmployeeLivestockListComponent } from './components/employee-livestock-list/employee-livestock-list.component';
import { EmployeeTaskListComponent } from './components/employee-task-list/employee-task-list.component';
import { LivestockListComponent } from './components/livestock-list/livestock-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [  
  {path: 'livestock', component: LivestockListComponent},
  {path: 'tasks-emp', component: EmployeeTaskListComponent},
  {path: 'livestock-emp', component: EmployeeLivestockListComponent},
  {path: 'tasks-admin', component: AdminTasksComponent},
  {path: 'view-emp-tasks', component: AdminTaskViewComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'email', component: EmailComponent},
  {path: 'home', component : HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  {path: 'customer', component: BoardCustomerComponent},
  {path: 'employee', component: BoardEmployeeComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
