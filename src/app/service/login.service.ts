import { Injectable } from '@angular/core';
import {Api} from '../api/api';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import { LoginVm } from 'src/app/model/LoginVm';
import { of, from, fromEvent, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private uri:string=Api.DOMINIO+'/api/private/login';
  private headers= new Headers({'Content-type':'application/json'});

  constructor(private http:Http) { }

  public login(loginVm:LoginVm):Observable<any>{
    return this.http.post(this.uri,loginVm).pipe(map(rs=>rs.json()));
  }
  
}
