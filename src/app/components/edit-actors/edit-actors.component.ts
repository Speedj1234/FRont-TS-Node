import { Component, OnInit } from '@angular/core';
import {Actor} from'../../Models/actor.model';
import{ControlContainer, FormBuilder, FormControl, FormGroup, NgForm, ValidatorFn, Validators, AbstractControl} from '@angular/forms';
import{ActivatedRoute, Router} from '@angular/router';
import { ActorsService } from '../../services/actors.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-edit-actors',
  templateUrl: './edit-actors.component.html',
  styleUrls: ['./edit-actors.component.scss']
})
export class EditActorsComponent implements OnInit {

actorForm!: FormGroup;
first_nameCtl!: FormControl;
last_nameCtl!: FormControl;
isNew: boolean = true;
actor!: Actor;



  constructor(private actorsService : ActorsService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) 
  {
    this.initForm();
   }

  ngOnInit(): void {

    if (this.route.snapshot.params["id"])
    {
      this.isNew = false;
      this.actorsService.getOneById(this.route.snapshot.params["id"]).subscribe(m =>
        {
          this.actor=m;
          this.actorForm.patchValue(this.actor);
        });
     
    }


  }

  initForm(): void
  {
   
      this.first_nameCtl = this.formBuilder.control ('', [Validators.required, Validators.minLength(5)]);
      this.last_nameCtl = this.formBuilder.control ('', [Validators.required, Validators.minLength(5)]);  

      this.actorForm = this.formBuilder.group({
        first_name: this.first_nameCtl,
        last_name: this.last_nameCtl
       
       
      });

  }
  

  onSubmit()
  {
 /*    const formVal = this.actorForm.value;

    console.log ("first_name : "+ formVal.first_name + " last_name : " + formVal.last_name);
    
    const newActor= new Actor(formVal);
      

    this.actorsService.addActors(newActor);
    console.log(newActor); */



    const formVal = this.actorForm.value;

    if (this.isNew)
    {
      formVal.id = 0;
      const newActor= new Actor(formVal);
      this.actorsService.addActors(newActor).subscribe(m=>{});
    }else
    {
      formVal.id = this.actor.id;
      const newActor = new Actor(formVal);
      this.actorsService.updateActor(newActor).subscribe();
    }

    this.router.navigate(['/actors']);
    
  }




}
