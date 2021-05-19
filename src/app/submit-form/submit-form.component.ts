import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {

  submitForm = new FormGroup({
    laptime : new FormControl(''),
    s1time : new FormControl(''),
    s2time : new FormControl(''),
    s3time : new FormControl(''),
    car : new FormControl(''),
    video : new FormControl(''),
    game : new FormControl(''),
    telemetry : new FormControl(''),
    setup : new FormControl(''),
    note : new FormControl('')

  });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.submitForm.value);
  }
}
