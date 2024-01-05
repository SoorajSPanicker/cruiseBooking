import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShipService {
  constructor(private http: HttpClient) {}

  signupApi(uname: any, email: any, psw: any) {
    const bodyData = {
      uname,
      email,
      psw,
    };
    return this.http.post('https://cruiseserver-0dty.onrender.com/cruiseship/userSignup',bodyData);
  }

  adminsignApi(uname: any, email: any, psw: any) {
    const bodyData = {
      uname,
      email,
      psw,
    };
    return this.http.post('https://cruiseserver-0dty.onrender.com/cruiseship/regadmin',bodyData);
  }

  loginApi(email: any, psw: any){
    const bodyData={
      email,
      psw
    }
    return this.http.post('https://cruiseserver-0dty.onrender.com/cruiseship/userlogin',bodyData)
  }

  adloginApi(email: any, psw: any){
    const bodyData={
      email,
      psw
    }
    return this.http.post('https://cruiseserver-0dty.onrender.com/cruiseship/adminlogin',bodyData)
  }


  roomsApi(){
    return this.http.get('https://cruiseserver-0dty.onrender.com/cruiseship/shiprooms')
  }

  singleroom(rtype:any){
    return this.http.get('https://cruiseserver-0dty.onrender.com/cruiseship/single/'+rtype)
  }
  deleteroom(rtype:any){
    return this.http.delete('https://cruiseserver-0dty.onrender.com/cruiseship/delete/'+rtype)
  }

  addRoomApi(rtype:any,
    duration:any,
    description:any,
    rsize:any,
    price:any,
    apolicy:any,
    image:any){
      const bodyData={rtype,
        duration,
        description,
        rsize,
        price,
        apolicy,
        image}
    
    return this.http.post('https://cruiseserver-0dty.onrender.com/cruiseship/addnewroom',bodyData)
  }
  editRoom(rtype:any,pdata:any){
    return this.http.post('https://cruiseserver-0dty.onrender.com/cruiseship/updatedata/'+rtype,pdata)
  }


}
