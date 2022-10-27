import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { ForgotPasswordComponent } from './views/shared/forgot-password/forgot-password.component';
import { NotFoundComponent } from './views/shared/not-found/not-found.component';
import { ListStudentComponent } from './views/student/list-student/list-student.component';
import { AddStudentComponent } from './views/student/add-student/add-student.component';
import { UpdateStudentComponent } from './views/student/update-student/update-student.component';
import { DeleteStudentComponent } from './views/student/delete-student/delete-student.component';
import { LoginComponent } from './views/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    ListStudentComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    DeleteStudentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
