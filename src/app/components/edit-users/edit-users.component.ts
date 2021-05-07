import { Component, OnInit } from '@angular/core';
import {User} from'../../Models/user.model';
import{ControlContainer, FormBuilder, FormControl, FormGroup, NgForm, ValidatorFn, Validators, AbstractControl} from '@angular/forms';
import{ActivatedRoute, Router} from '@angular/router';
import { UsersService } from '../../services/users.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { UsersCommonService } from 'src/app/services/users-common.service';


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {

userForm!: FormGroup;
usernameCtl!: FormControl;
emailCtl!: FormControl;
passwordCtl!: FormControl;
isNew: boolean = true;
user!:User;



  constructor(private usersService : UsersService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private usersCommonService: UsersCommonService) 
  {
    this.initForm();
   }

  ngOnInit(): void {

    if (this.route.snapshot.params["id"])
    {
      this.isNew = false;
      this.usersService.getOneById(this.route.snapshot.params["id"]).subscribe(m =>
        {
          this.user=m;
          this.userForm.patchValue(this.user);
        });
     
    }


  }

  


  initForm(): void
  {
   
      this.usernameCtl = this.formBuilder.control ('', [Validators.required, Validators.minLength(3)], this.usernameExist());
      this.passwordCtl = this.formBuilder.control ('', [Validators.required, Validators.minLength(3)]);
      this.emailCtl = this.formBuilder.control ('', [Validators.required, Validators.email, Validators.minLength(7)]);  

      this.userForm = this.formBuilder.group({
        username: this.usernameCtl,
        password: this.passwordCtl,
        email: this.emailCtl
       
       
      });

  }
  
  usernameExist(): any
  {
    var timeout: any;
    return (ctl: FormControl) =>
    {
      clearTimeout(timeout);
      const username = ctl.value;
      return new Promise(resolve => {
        timeout = setTimeout(() =>{
          if(ctl.pristine)
          {
            resolve(null);
          } else 
          {
            this.usersCommonService.getOneByName(username).subscribe(user => 
              {
                resolve(user && this.isNew ? { usernameExist: true } : null);
              })
          }
        }, 300)
      });
    }
  }


  onSubmit()
  {

    const formVal = this.userForm.value;

    if (this.isNew)
    {
      formVal.id = 0;
      const newUser= new User(formVal);
      this.usersCommonService.addUsers(newUser).subscribe(m=>{});
    }else
    {
      formVal.id = this.user.id;
      const newUser = new User(formVal);
      this.usersService.updateUser(newUser).subscribe();
    }

    this.router.navigate(['/users']);
    
  }




}
