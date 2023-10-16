import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipService } from '../services/ship.service';

@Component({
  selector: 'app-adview',
  templateUrl: './adview.component.html',
  styleUrls: ['./adview.component.css'],
})
export class AdviewComponent implements OnInit {
  pid: any;
  pdata: any = {};
  
  constructor(
    private ar: ActivatedRoute,
    private ss: ShipService,
    private rout: Router
  ) {}
  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      console.log(data.rtype);
      this.pid = data.rtype;
      console.log(this.pid);
      
       
      
    });
    this.ss.singleroom(this.pid).subscribe((response: any) => {
      console.log(response);
      this.pdata = response;
      console.log(this.pdata);
      // this.ds.getProfile(this.acno).subscribe((response: any) => {
      //   console.log(response);
      //   this.profileData = response;
      // });
    });
  }
  deleteroom() {
    this.ss.deleteroom(this.pid).subscribe(
      (result: any) => {
        alert('deleted');
        this.rout.navigateByUrl('page/adminhome');
      },
      (response) => {
        alert(response.error);
      }
    );
  }
  // bookroom(){
  //   if (localStorage.getItem('currentuname')) {
  //     this.uname = localStorage.getItem('currentuname');
  //     console.log(this.uname);
  //   }
  //   this.ss.getProfile(this.uname).subscribe((response: any) => {
  //     console.log(response);
  //     this.profileData = response;
  //   });
  // }
}
