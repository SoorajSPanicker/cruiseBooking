import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShipService } from '../services/ship.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  pswMatch: boolean = false;
  signUpModelForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    ],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
  });
  constructor(
    private rout: Router,
    private fb: FormBuilder,
    private ss: ShipService
  ) {}
  ngOnInit(): void {}
  signup() {
    var path = this.signUpModelForm.value;
    var uname = path.uname;
    var email = path.email;
    var psw = path.psw;
    var cpsw = path.cpsw;
    if (this.signUpModelForm.valid) {
      if (psw == cpsw) {
        this.pswMatch = false;
        this.ss.signupApi(uname, email, psw).subscribe(
          (response: any) => {
            console.log(response);
            alert(`${response.uname} registered`);
            this.rout.navigateByUrl('page');
          },
          (response) => {
            alert(response.console.error);
          }
        );
      } else {
        // alert("password doesn't match")
        this.pswMatch = true;
      }
    } else {
      alert('invalid form');
    }
  }
}
