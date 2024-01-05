import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ShipService } from '../services/ship.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlog',
  templateUrl: './adminlog.component.html',
  styleUrls: ['./adminlog.component.css']
})
export class AdminlogComponent implements OnInit {
  adlogModelForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    ],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
  });
 
  constructor(private fb:FormBuilder,private ss:ShipService,private rout:Router){}
  ngOnInit(): void {
   
  }
  adlogin(){
    if (this.adlogModelForm.valid) {
      var email = this.adlogModelForm.value.email;
      var psw = this.adlogModelForm.value.psw;
      this.ss.adloginApi(email,psw).subscribe((response: any) => {
        console.log(response);
        alert(`${response.uname} login success`)
        localStorage.setItem("currentuname",response.uname)
        localStorage.setItem("currentemail",response.email)
        this.rout.navigateByUrl('page/adminhome');
      },
      response=>{
        alert(response.error)
      });
    } else {
      ('invalid form');
    }

  }
  userlogin(){
    this.rout.navigateByUrl('page')
  }
  

}
