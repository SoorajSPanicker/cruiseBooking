import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipService } from '../services/ship.service';

@Component({
  selector: 'app-adbook',
  templateUrl: './adbook.component.html',
  styleUrls: ['./adbook.component.css']
})
export class AdbookComponent implements OnInit {
  uname: any;
  email:any;
  pid: any;
  pdata: any = {};

  constructor(private ar: ActivatedRoute,
    private ss: ShipService,
    private rout: Router){}
  ngOnInit(): void {
    this.uname = localStorage.getItem('currentuname');
    this.email=localStorage.getItem('currentemail')
    this.ar.params.subscribe((data: any) => {
      console.log(data.rtype);
      this.pid = data.rtype;
      console.log(this.pid);
      
    
  })
  this.ss.singleroom(this.pid).subscribe((response: any) => {
    console.log(response);
    this.pdata = response;
    console.log(this.pdata);
    

})
    
  }

}
