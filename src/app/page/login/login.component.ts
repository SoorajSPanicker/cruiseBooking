
import { Component, OnInit } from '@angular/core';
import { ShipService } from '../services/ship.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginModelForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    ],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
  });
  constructor(
    private ss: ShipService,
    private rout: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
 
  }
  login() {
    if (this.loginModelForm.valid) {
      var email = this.loginModelForm.value.email;
      var psw = this.loginModelForm.value.psw;
      this.ss.loginApi(email,psw).subscribe((response: any) => {
        // console.log(response);
        alert(`${response.uname} login success`)
        localStorage.setItem("currentuname",response.uname)
        localStorage.setItem("currentemail",response.email)
        this.rout.navigateByUrl('page/home');
      },
      response=>{
        alert(response.error)
      });
    } else {
      ('invalid form');
    }
    
  }
  adminlogin(){
    this.rout.navigateByUrl('page/adminlogin')
  }
}
