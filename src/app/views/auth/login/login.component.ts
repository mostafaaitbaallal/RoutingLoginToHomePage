import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private fb: FormBuilder, private retour: Router) { }

  ngOnInit(): void {
  }

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    } else {
      // You can add your business logic of authentification
      this.retour.navigateByUrl("/Main/ListStudent");
    }


    console.log(this.loginForm.value);
  }
  

}
