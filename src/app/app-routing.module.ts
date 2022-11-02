import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// layouts
import { MainComponent } from "./layouts/main/main.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { AddStudentComponent } from "./views/student/add-student/add-student.component";
import { ListStudentComponent } from "./views/student/list-student/list-student.component";


// auth views
import { LoginComponent } from "./views/auth/login/login.component";


// views without layouts

import { ForgotPasswordComponent } from './views/auth/forgot-password/forgot-password.component';
import { NotFoundComponent } from './views/shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
     pathMatch: "full" 
  },
  {
    path: "main",
    component: MainComponent,
    children: [
      { path: "ListStudent", component: ListStudentComponent},
      { path: "AddStudent", component: AddStudentComponent },
      { path: "listStudent", redirectTo: "listStudent", pathMatch: "full" },
    ],
  },
  {
    path: "Auth",
    component: AuthComponent,
    children: [
      { path: "Login", component: LoginComponent },
      { path: "ForgotPassword", component: ForgotPasswordComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


