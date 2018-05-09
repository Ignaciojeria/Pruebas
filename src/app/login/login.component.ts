import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import {LoginVm} from '../model/LoginVm'
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loggedIn:boolean;
  
  private error:boolean;

  private loginVmFormGroup:FormGroup;

  constructor(private loginService:LoginService,private fb:FormBuilder,private router:Router ) { 
    
    this.loginVmFormGroup=fb.group({
      email:'',
      password:''
    });

  }

  public login(){
    let loginVm:LoginVm=this.loginVmFormGroup.getRawValue();
    this.loginService.login(loginVm).subscribe(rs=> {console.log("Solicitud aceptada");
      console.log(rs);
      this.loggedIn=true;
      this.router.navigate(['suite/inicio']);
    },
err=> {console.log(err); console.log("Solicitud errada");});
  }

  ngOnInit() {
    /*
    let loginVm:LoginVm =new LoginVm("ignaciovl.j@gmail.com","123456",false);
    this.loginService.login(loginVm).subscribe(rs=> {
      console.log(rs);},
err=> {console.log(err);  });*/
  }
  
}
