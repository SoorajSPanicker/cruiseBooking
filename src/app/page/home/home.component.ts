import { Component, OnInit } from '@angular/core';
import { ShipService } from '../services/ship.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allrooms: any = [];
  user:any='';
  constructor(private ss: ShipService,private rout:Router) {}
  ngOnInit(): void {
    if(!localStorage.getItem('currentuname')){
      alert("please login first")
      this.rout.navigateByUrl('')
    }

    this.ss.roomsApi().subscribe((data: any) => {
      // console.log(data);

      this.allrooms = data;
      console.log(this.allrooms);
    });
   
  }
  logout(){
    localStorage.removeItem('currentuname')
    localStorage.removeItem("currentemail")
  }

}
