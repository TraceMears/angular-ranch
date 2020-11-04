import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivestockListComponent } from './components/livestock-list/livestock-list.component';
import { LivestockService } from './services/livestock.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './authComponents/login/login.component';
import { RegisterComponent } from './authComponents/register/register.component';
import { HomeComponent } from './authComponents/home/home.component';
import { ProfileComponent } from './authComponents/profile/profile.component';
import { BoardAdminComponent } from './authComponents/board-admin/board-admin.component';
import { BoardCustomerComponent } from './authComponents/board-customer/board-customer.component';
import { BoardEmployeeComponent } from './authComponents/board-employee/board-employee.component';
import { BoardUserComponent } from './authComponents/board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeLivestockListComponent } from './components/employee-livestock-list/employee-livestock-list.component';
import { EmployeeTaskListComponent } from './components/employee-task-list/employee-task-list.component';
import { TaskService } from './services/task.service';
import { CompletedTasksService } from './services/completed-tasks.service';
import { AdminTasksComponent } from './components/admin-tasks/admin-tasks.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartService } from './services/cart.service';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { EmailComponent } from './components/email/email.component';
import { AdminTaskViewComponent } from './components/admin-task-view/admin-task-view.component';


@NgModule({
  declarations: [
    AppComponent,
    LivestockListComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardCustomerComponent,
    BoardEmployeeComponent,
    BoardUserComponent,
    EmployeeLivestockListComponent,
    EmployeeTaskListComponent,
    AdminTasksComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    EmailComponent,
    AdminTaskViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders, LivestockService, TaskService, CompletedTasksService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
