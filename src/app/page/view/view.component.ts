import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipService } from '../services/ship.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  pid:any
  pdata:any={}
  constructor(private ar:ActivatedRoute,private ss:ShipService){}
  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      console.log(data.rtype);
      this.pid=data.rtype
      console.log(this.pid);
      
      
    })
    this.ss.singleroom(this.pid).subscribe((response:any) => {
      console.log(response);
      this.pdata=response
      console.log(this.pdata);
    // this.ds.getProfile(this.acno).subscribe((response: any) => {
    //   console.log(response);
    //   this.profileData = response;
    // });
      
    })
    
  }

}
