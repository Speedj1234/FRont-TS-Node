import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Actor } from 'src/app/Models/actor.model';
import{ActorsService} from'../../../services/actors.service'
import { MatEditActorsComponent } from '../edit-actors/edit-actors.component';

@Component({
  selector: 'app-mat-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class MatActorsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'actions'];
  dataSource!: MatTableDataSource<Actor>;
  public actorsList!: Actor[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private actorService: ActorsService,
     private router: Router,
     public dialog: MatDialog,
     public snackBar: MatSnackBar) { }

  ngOnInit(): void { 
    this.refresh(); // on appelle la fonction refresh dans ngOnInit
   
  }

  refresh()
  {
    this.actorService.getAll().subscribe(actors =>
      {
        this.actorsList = actors;
        this.updateDataSource();
       
      })
  }

  updateDataSource()
  {
    this.dataSource = new MatTableDataSource(this.actorsList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort= this.sort;
  }

  edit(actor: Actor): void
  {
    const dlg = this.dialog.open(MatEditActorsComponent, {data: actor});
    dlg.beforeClosed().subscribe(res =>
      {
        if(res)
        {
         // console.log(res);
          res.id=actor.id;
          const newActor= new Actor(res);
          this.actorService.updateActor(newActor).subscribe(m =>
            {
              this.refresh();
            });
        }
      });
    
  }

  create()
  {
   
    const dlg = this.dialog.open(MatEditActorsComponent, {data: new Actor({})});
    dlg.beforeClosed().subscribe(res =>
      {
      if(res)
      {
        const actor=new Actor(res);
        this.actorService.addActors(actor).subscribe(m =>
          {
            this.refresh();
          });
      }

      
      });
  }

  delete(actor: Actor): void
  {
    if(confirm("are you sure to delete ?!!!"))
    {
    this.actorService.deleteActor(actor).subscribe(actors =>
      {
        this.actorsList = actors;
        this.updateDataSource();
      });
    }
  }

}
