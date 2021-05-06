import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { ServerService } from 'src/app/services/server.service';
import{ControlContainer, FormBuilder, FormControl, FormGroup, NgForm, ValidatorFn, Validators, AbstractControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authUserForm!: FormGroup;
  authUsernameCtl!: FormControl;
  authEmailCtl!: FormControl;
  authPasswordCtl!: FormControl;
  isConnected: boolean ;
  user!:User;
  usersService: any;





  constructor(private authService: AuthService,private formBuilder: FormBuilder, private router: Router) { 
    this.isConnected = this.authService.isLoggedIn;
    this.initForm();
  }

  ngOnInit(): void {
    // const user = new User({
    //   id: 1,
    //   username:"toto",
    //   password:"toto",
    //   email:"toto@toto.com"
    // });
    // this.server.login(user).subscribe();
  }

  initForm(): void
  {
   
      this.authUsernameCtl = this.formBuilder.control ('', [Validators.required]);
      this.authPasswordCtl! = this.formBuilder.control ('', [Validators.required]);


      this.authUserForm = this.formBuilder.group({
        username: this.authUsernameCtl,
        password: this. authPasswordCtl,
        email: this.authEmailCtl
       
      });

  }


  onSubmit()
  {

    const formVal = this.authUserForm.value;


      formVal.id = 0;
      const user= new User(formVal);
      this.authService.login(user).subscribe((bool: boolean) => { 
        this.isConnected=this.authService.isLoggedIn;
        if(bool) {this.router.navigate([this.authService.redirectUrl]);}
      });
    
  }

  onLogout()
  {
    this.authService.logout();
    this.isConnected = this.authService.isLoggedIn;
  }


  

}
