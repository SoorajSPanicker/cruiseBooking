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
    return this.http.post('http://localhost:8000/cruiseship/userSignup',bodyData);
  }

  adminsignApi(uname: any, email: any, psw: any) {
    const bodyData = {
      uname,
      email,
      psw,
    };
    return this.http.post('http://localhost:8000/cruiseship/regadmin',bodyData);
  }

  loginApi(email: any, psw: any){
    const bodyData={
      email,
      psw
    }
    return this.http.post('http://localhost:8000/cruiseship/userlogin',bodyData)
  }

  adloginApi(email: any, psw: any){
    const bodyData={
      email,
      psw
    }
    return this.http.post('http://localhost:8000/cruiseship/adminlogin',bodyData)
  }


  roomsApi(){
    return this.http.get('http://localhost:8000/cruiseship/shiprooms')
  }

  singleroom(rtype:any){
    return this.http.get('http://localhost:8000/cruiseship/single/'+rtype)
  }
  deleteroom(rtype:any){
    return this.http.delete('http://localhost:8000/cruiseship/delete/'+rtype)
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
    
    return this.http.post('http://localhost:8000/cruiseship/addnewroom',bodyData)
  }
  editRoom(rtype:any,pdata:any){
    return this.http.post('http://localhost:8000/cruiseship/updatedata/'+rtype,pdata)
  }


}
