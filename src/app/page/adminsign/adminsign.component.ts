import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ShipService } from '../services/ship.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsign',
  templateUrl: './adminsign.component.html',
  styleUrls: ['./adminsign.component.css']
})
export class AdminsignComponent implements OnInit {
  pswMatch: boolean = false;
  adminModelForm = this.fb.group({
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
  constructor(private fb:FormBuilder,private ss:ShipService,private rout:Router){}
  ngOnInit(): void {
    
  }
  adminsignup() {
    var path = this.adminModelForm.value;
    var uname = path.uname;
    var email = path.email;
    var psw = path.psw;
    var cpsw = path.cpsw;
    if (this.adminModelForm.valid) {
      if (psw == cpsw) {
        this.pswMatch = false;
        this.ss.adminsignApi(uname, email, psw).subscribe(
          (response: any) => {
            console.log(response);
            alert(`${response.uname} registered`);
            this.rout.navigateByUrl('page/adminlogin');
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
