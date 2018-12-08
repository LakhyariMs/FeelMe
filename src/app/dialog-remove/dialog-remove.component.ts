import { Component, OnInit, Inject } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../list-film/list-film.component';
import { ListService } from '../list.service';
import { Router } from '@angular/router';
import { t } from '@angular/core/src/render3';

@Component({
  selector: 'app-dialog-remove',
  templateUrl: './dialog-remove.component.html',
  styleUrls: ['./dialog-remove.component.css']
})
export class DialogRemoveComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogRemoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fireSevc: ListService,
    private router: Router) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }

  onDelete() {
    console.log(`cleeee`+this.data.cle);
    this.dialogRef.close();
    this.fireSevc.removeMovieList(this.data.cle);
    this.router.navigateByUrl('/list');

  }
}
