import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  requestForm = new FormGroup({
    type : new FormControl(''),
    name : new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.requestForm.value)
  }

}
