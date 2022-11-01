import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//-----Layouts-----//
import { AuthComponent } from './layouts/auth/auth.component';
import { MainComponent } from './layouts/main/main.component';
//----------------//

import { AppComponent } from './app.component';

import { ForgotPasswordComponent } from './views/shared/forgot-password/forgot-password.component';
import { NotFoundComponent } from './views/shared/not-found/not-found.component';
import { ListStudentComponent } from './views/student/list-student/list-student.component';
import { AddStudentComponent } from './views/student/add-student/add-student.component';
import { UpdateStudentComponent } from './views/student/update-student/update-student.component';
import { DeleteStudentComponent } from './views/student/delete-student/delete-student.component';
import { LoginComponent } from './views/auth/login/login.component';

//-----Material UI Components-----//
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
//-------------------------------//

import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    ListStudentComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    DeleteStudentComponent,
    LoginComponent,
    AuthComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
