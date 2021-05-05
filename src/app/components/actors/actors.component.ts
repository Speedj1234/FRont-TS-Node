import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/Models/actor.model';
import{ActorsService} from'../../services/actors.service'

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {
  public actorsList!: Actor[];

  constructor(private actorService: ActorsService) { }

  ngOnInit(): void {
    this.actorService.getAll().subscribe(actors =>
      {
        this.actorsList = actors;
      })
  }

}
