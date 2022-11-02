import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  isAuth: boolean = false;
  
  constructor(private fb: FormBuilder, private retour: Router) { }

  ngOnInit(): void {
  }

 


  onLogin() {
    if (!this.loginForm.valid) {
      this.isAuth = false;
      return;
    } else {
      // You can add your business logic of authentification via auth service
     if (this.loginForm.controls['username'].value == 'admin@admin.edu' && this.loginForm.controls['password'].value == '123456') {
       this.isAuth = false;
        this.retour.navigateByUrl("/main/ListStudent");
      } else {
        this.isAuth = true;
      }
      
    }

  }
  

}
