import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListFilmService } from '../list-film.service';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { ListService } from '../list.service';
import { MatDialog, MatDialogConfig, VERSION, MatDialogRef} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogRemoveComponent } from '../dialog-remove/dialog-remove.component';


export interface DialogData {
  listeName?: string;
  cle?: string;
}


@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit, OnDestroy {
  version = VERSION;

  fileNameDialogRef: MatDialogRef<DialogComponent>;
  DialogRemoveRef: MatDialogRef<DialogRemoveComponent>;


  private sub: any;
  listeCle: any;
  private listeName: string ;

  public listMovies: any[] = [];


  constructor(private router: Router, private listFilmService: ListFilmService, private route: ActivatedRoute,
    private fireSevc: ListService, private dialog: MatDialog, private dialogRemove: MatDialog) {
    
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log('Clé: ', this.listeCle = params['$key']);
    });
    this.sub = this.route.params.subscribe(params => {
      this.listeName = params['content'];
      console.log('Nom: ', this.listeName );

  });

  this.fireSevc.getAllMovieOfList(this.listeCle).snapshotChanges().subscribe(lists => {
    
    this.listMovies=[];
    lists.forEach(list => {
      const x = list.payload.toJSON();
      x['$key'] = list.key;
      console.log('samya test: ', list.key );

      this.listMovies.push(x);
    });
  });
  console.log('samya' + this.fireSevc.getAllMovieOfList(this.listeCle));
  }



  get getlistMovies() { // retourne tous les listes sauvegarder
    return     this.listMovies;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get getListName() {
   // return this.listeCle;
   return this.listeName;
  }
  get getClelist(){
    return this.listeCle;
  }


  onDelete() {
    this.fireSevc.removeMovieList(this.listeCle);
    this.router.navigateByUrl('/list');
  }

  Retour() {
    this.router.navigateByUrl('/list');
  }

  updateNameList(item) {
    this.listeName = item;
    this.fireSevc.update(item, this.listeCle);
  }


  // get moviesId() {
  //   return this.lfservice.getList();
  // }
  // addMovie(name: string  , movieId: number) {
  //   this.lfservice.addMovie(name , movieId );
  // }
  // getMovies() {
  //   return this.lfservice.getMovieList('liste 1');
  // }



  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(DialogComponent, { data: {name: this.listeName}});

    this.fileNameDialogRef.afterClosed().subscribe(result => {
      if ( result === undefined) { result = 'listNomPardefault'; }
      console.log('The dialog was closed', result);
      this.updateNameList(result);
    });
  }

  openremoveFileDialog() {
    this.DialogRemoveRef = this.dialogRemove.open(DialogRemoveComponent, { data: {cle: this.listeCle}});

  }
 

//supprimer un film dans une list
removemovie(key:string){
  this.listMovies=[]; 
  this.fireSevc.removeMovieFromList(key,this.listeCle);
}



}
