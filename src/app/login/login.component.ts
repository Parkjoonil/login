import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: any = FormGroup;
  users: any = [
    {
      name: 'asd',
      email: 'asd@asd.com'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.login = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])]
    })
  }

  loginSubmit(data: any) {
    if(data.name) {
      this.users.forEach((item: any) => {
        if(item.name === data.name && item.email === data.email) {
          localStorage.setItem("isLoggedIN", "true");
          this.router.navigate(['main']);
          
        }
        else {
          localStorage.clear();
          
        }
      });
    }
  }

  goToSignup() {
    this.router.navigateByUrl('signup')
  }

}
