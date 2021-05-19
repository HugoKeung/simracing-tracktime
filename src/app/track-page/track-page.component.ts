import { Component, OnInit } from '@angular/core';
import { SubmitFormComponent } from '../submit-form/submit-form.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TrackTableDisplay } from '../track-table-display';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {

  trackRecord: TrackTableDisplay[]=[
    { track: "Spa",
      laptime: "1:35",
      s1time: "0:30",
      s2time: "0:32",
      s3time: "0:33",
      car: "Mazda MX5",
      class: "GT3",
      video: "youtube.com",
      telemetry: "file here",
      setup: "file here",
      notes: "notes here",
      votes: 10},
      { track: "Spa",
      laptime: "1:35",
      s1time: "0:30",
      s2time: "0:32",
      s3time: "0:33",
      car: "Mazda MX6",
      class: "GT3",
      video: "youtube.com",
      telemetry: "file here",
      setup: "file here",
      notes: "notes here",
      votes: 9},

  ]

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openForm(){
    let dialogRef = this.dialog.open(SubmitFormComponent, {
      height: '1000px',
      width: '600px',
      panelClass: 'submitDialog'
    });

    this.trackRecord[0].votes=5;
  }

}
