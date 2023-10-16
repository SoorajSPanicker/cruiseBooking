import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ShipService } from '../services/ship.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  addForm = this.fb.group({
    rtype: [''],
    duration: [''],
    description: [''],
    rsize: [''],
    price: [''],
    apolicy: [''],
    image: [''],
    // rtype:String,
    // duration:String,
    // description:String,
    // rsize:Number,
    // price:Number,
    // apolicy:String,
    // image:String
  });

  constructor(
    private fb: FormBuilder,
    private ss: ShipService,
    private rout: Router
  ) {}
  ngOnInit(): void {}
  add() {
    var path = this.addForm.value;
    // var newRoom={
    var rtype = path.rtype;
    var duration = path.duration;
    var description = path.description;
    var rsize = path.rsize;
    var price = path.price;
    var apolicy = path.apolicy;
    var image = path.image;

    // }
    // console.log(newRoom);
    if (this.addForm.valid) {
      this.ss.addRoomApi(rtype,duration,description,rsize, price, apolicy, image)
        .subscribe(
          (result: any) => {
            console.log(result);
            alert('Room added successfully');
            this.rout.navigateByUrl('page/adminhome');
          },
          result => {
            alert(result.error);
          }
        );
    } else {
      alert('invalid form');
    }
  }
}
