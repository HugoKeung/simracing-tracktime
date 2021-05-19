import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RequestFormComponent } from '../request-form/request-form.component';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openRequest(){
    let dialogRef = this.dialog.open(RequestFormComponent, {
      height: '100px',
      width: '600px',
      panelClass:'submitDialog'
    });
  }

}
