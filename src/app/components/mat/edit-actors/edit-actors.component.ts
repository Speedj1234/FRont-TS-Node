import { Component, OnInit, Inject } from '@angular/core';;
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Actor } from 'src/app/Models/actor.model';

import{FormBuilder, FormControl, FormGroup, NgForm, ValidatorFn, Validators, AbstractControl} from '@angular/forms';



@Component({
  selector: 'app-mat-edit-actors',
  templateUrl: './edit-actors.component.html',
  styleUrls: ['./edit-actors.component.scss']
})
export class MatEditActorsComponent implements OnInit {

  actorForm!: FormGroup;
firstnameCtl!: FormControl;
lastnameCtl!: FormControl;
isNew: boolean = true;
actor!: Actor;

  constructor(public dialogRef: MatDialogRef<MatEditActorsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Actor, private formBuilder: FormBuilder)
    {
      this.initForm();
     }

     initForm(): void
     {
      
         this.firstnameCtl = this.formBuilder.control ('', [Validators.required]);
         this.lastnameCtl = this.formBuilder.control ('', [Validators.required]);  
   
         this.actorForm = this.formBuilder.group({
           first_name: this.firstnameCtl,
           last_name: this.lastnameCtl
         });
         
         this.actorForm.patchValue(this.data); // patchValue : va remplir le formulaire

     }
  ngOnInit(): void {
  }

  update()
  {
    const data = this. actorForm.value;
    this.dialogRef.close(data);
  }

}
