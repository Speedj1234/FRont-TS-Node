import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-actors-container',
  templateUrl: './actors-container.component.html',
  styleUrls: ['./actors-container.component.scss']
})
export class ActorsContainerComponent implements OnInit {

  constructor(private materialService: MaterialService) { }

  ngOnInit(): void {
  }

  isMatActive()
  {
    return this.materialService.isActive;
  }

  onClick()
  {
    this.materialService.isActive = !this.materialService.isActive;
  }


}
