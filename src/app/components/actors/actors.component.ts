import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/Models/actor.model';
import{ActorsService} from'../../services/actors.service'

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {
  public actorsList!: Actor[];

  constructor(private actorService: ActorsService, private router: Router) { }

  ngOnInit(): void {
    this.actorService.getAll().subscribe(actors =>
      {
        this.actorsList = actors;
       
      })
  }

  edit(id: any): void
  {
    this.router.navigate(['edit-actors/'+id])
  }

  delete(actor: Actor): void
  {
    if(confirm("are you sure to delete ?!!!"))
    {
    this.actorService.deleteActor(actor).subscribe(actors =>
      {
        this.actorsList = actors;
      });
    }
  }

}
