import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipService } from '../services/ship.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
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
      this.ss.singleroom(this.pid).subscribe((result: any) => {
        
        
        this.pdata = result;
        console.log(this.pdata);
      });
    });
  }
  editroom() {
    this.ss.editRoom(this.pid,this.pdata).subscribe((result: any) => {
      console.log(result);
      
      alert('Room data updated');
      this.rout.navigateByUrl('page/adminhome');
    },result=>{
      alert(result.error)
    });
  }
}
